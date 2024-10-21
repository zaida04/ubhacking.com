import { registerUserSchema } from "$form/register/schema";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad } from "./$types";
import { fail, superValidate } from "sveltekit-superforms";
import { redirect, type Actions } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";
import { isDev } from "$lib/utils";
import { NOTIFY_WEBHOOK } from '$env/static/private'
import * as Sentry from '@sentry/sveltekit';

export const load: PageServerLoad = async (ctx) => {
	const getCurrentUser = await ctx.locals.safeGetSession();
	const userId = getCurrentUser?.session?.user?.id;

	if (!userId && !isDev) {
		return redirect(302, "/login");
	}
	const getExistingSubsmission = await supabase
		.from('registration')
		.select()
		.eq('created_by', userId);

	return {
		form: await superValidate(zod(registerUserSchema)),
		existingSubmission: getExistingSubsmission.data?.[0] || null
	};
};


export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(registerUserSchema));

		if (!form.valid) {
			return fail(400, { form, error: "Your inputs are not valid. Please check your form for errors in formatting. If you believe this is in error, contact us at contact@ubhacking.com" });
		}

		const getCurrentUser = await locals.safeGetSession();
		const userId = getCurrentUser?.session?.user?.id;

		if (!userId) {
			return fail(401, { form, error: "You must be logged in to submit the form." });
		}


		try {
			const formData = getFormData(form);

			// upload resume
			const file = form.data.resume
			if (file) {
				const { data, error } = await supabase.storage
					.from('resume')
					.upload(`${formData.name_first}_${formData.name_last}.pdf`, file)
				if (error) {
					throw error;
				}
				formData.resume_url = data.fullPath
			}

			// Insert data into Supabase
			const { data, error } = await supabase
				.from('registration')
				.insert([{
					...formData,
					created_by: userId,
				}])
				.select();

			if (error) {
				throw error;
			}
		} catch (e) {
			console.error(e);
			Sentry.captureException(e);
			return fail(500, { form, error: "An error occurred while submitting the form. Please report this at contact@ubhacking.com" });
		}

		try {
			console.log("Sending notify webhook.")
			const response = await fetch(NOTIFY_WEBHOOK, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					embeds: [
						{
							title: 'New Hacker Submission',
							color: 7506394,
							fields: [
								{
									name: "First Name",
									value: form.data.nameFirst ?? "N/A",
									inline: true
								},
								{
									name: "Last Name",
									value: form.data.nameLast ?? "N/A",
									inline: true
								},
								{
									name: "Email",
									value: form.data.contactEmail ?? "N/A",
									inline: true
								},
								{
									name: "Phone",
									value: form.data.phone ?? "N/A",
									inline: true
								},
								{
									name: "Major",
									value: form.data.schoolMajor ?? "N/A",
									inline: true
								},
								{
									name: "Level of Study",
									value: form.data.levelOfStudy ?? "N/A",
									inline: true
								},
								{
									name: "Graduation Year",
									value: form.data.graduationYear ?? "N/A",
									inline: true
								},
								{
									name: "Shirt Size",
									value: form.data.shirtSize ?? "N/A",
									inline: true
								},
								{
									name: "Dietary Restrictions",
									value: form.data.dietaryRestrictions ?? "N/A",
									inline: true
								},
								{
									name: "Dietary Restrictions Other",
									value: form.data.dietaryRestrictionsOther ?? "N/A",
									inline: true
								},
								{
									name: "Allergies",
									value: form.data.allergies ?? "N/A",
									inline: true
								},
								{
									name: "Allergies Other",
									value: form.data.allergiesOther ?? "N/A",
									inline: true
								},
								{
									name: "Special Request",
									value: form.data.specialRequest ?? "N/A",
									inline: true
								}
							]
						}
					]
				})
			})

			if (response.ok) {
				console.log('Embed sent successfully');
			} else {
				console.error('Failed to send embed', response.statusText);
			}
		} catch (e) {
			console.error(e);
		}

		throw redirect(302, "/confirmed");
	}
};

const getFormData = (form: any) => {
	return {
		contact_email: form.data.contactEmail,
		name_first: form.data.nameFirst,
		name_last: form.data.nameLast,
		dob: form.data.dob,
		phone: form.data.phone,
		gender: form.data.gender,
		race_ethnicity: form.data.raceEthnicity,
		country: form.data.country,
		school_name: form.data.schoolName,
		school_major: form.data.schoolMajor,
		level_of_study: form.data.levelOfStudy,
		graduation_year: form.data.graduationYear,
		address1: form.data.address1,
		city: form.data.city,
		state: form.data.state,
		zip_code: form.data.zipCode,
		is_attending_in_person: form.data.isAttendingInPerson,
		shirt_size: form.data.shirtSize,
		dietary_restrictions: form.data.dietaryRestrictions,
		dietary_restrictions_other: form.data.dietaryRestrictionsOther,
		allergies: form.data.allergies,
		allergies_other: form.data.allergiesOther,
		special_request: form.data.specialRequest,
		how_you_heard: form.data.howYouHeard,
		why_attend: form.data.whyAttend,
		code_of_conduct_ub_hacking: form.data.codeOfConductUBHacking,
		code_of_conduct: form.data.codeOfConductMLH,
		data_sharing: form.data.dataSharingMLH,
		communication: form.data.communicationMLH,
		resume_url: "None"
	}
}
