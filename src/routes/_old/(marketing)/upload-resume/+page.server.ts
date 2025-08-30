import { redirect, fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import * as Sentry from '@sentry/sveltekit';
import { NOTIFY_WEBHOOK } from '$env/static/private';
import { zod } from "sveltekit-superforms/adapters";
import { updateResumeSchema } from "$form/register/resume";

export const load: PageServerLoad = async (ctx) => {
    const getCurrentUser = await ctx.locals.safeGetSession();
    const userId = getCurrentUser?.session?.user?.id;

    if (!userId) {
        throw redirect(302, "/login");
    }

    const getExistingSubmission = await ctx.locals.supabase
        .from('registration')
        .select("id, name_first, name_last, contact_email, resume_url, accepted")
        .eq('created_by', userId);

    return {
        form: await superValidate(zod(updateResumeSchema)),
        existingResume: getExistingSubmission.data?.at(0)?.resume_url || null
    };
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const file = formData.get('resume') as File;

        if (!file) {
            return fail(400, { error: "Please upload a valid resume file." });
        }

        const getCurrentUser = await locals.safeGetSession();
        const userId = getCurrentUser?.session?.user?.id;

        if (!userId) {
            return fail(401, { error: "You must be logged in to upload the resume." });
        }

        try {
            const { data: _oldData, error: fetchError } = await locals.supabase
                .from('registration')
                .select('name_first, name_last')
                .eq('created_by', userId);

            const oldData = _oldData?.at(0);

            if (fetchError) {
                throw fetchError;
            }
            if (!oldData) {
                throw new Error("User not found.");
            }

            const { data, error: uploadError } = await locals.supabase.storage
                .from('resume')
                .upload(`${oldData.name_first}_${oldData.name_last}-${Date.now()}.pdf`, file);


            if (uploadError) {
                throw uploadError;
            }

            const { error: updateError } = await locals.supabase
                .from('registration')
                .update({ resume_url: data.fullPath })
                .eq('created_by', userId);

            if (updateError) {
                throw updateError;
            }

            await fetch(NOTIFY_WEBHOOK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `User ${userId} has uploaded a new resume.`
                })
            }).catch(() => null);
        } catch (e) {
            console.error(e);
            Sentry.captureException(e);
            return fail(500, { error: "An error occurred while uploading the resume. Please try again later." });
        }

        throw redirect(302, "/uploaded-resume");
    }
};
