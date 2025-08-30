import type { PageServerLoad, Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.safeGetSession();
    const userId = session?.session?.user?.id;

    if (!userId) {
        throw redirect(302, '/login');
    }

    const { data, error } = await supabase
        .from('registration')
        .select('rsvp, accepted')
        .eq('created_by', userId)
        .then(x => ({ data: x.data?.at(0), error: x.error }));

    if (error) {
        console.error('Error fetching RSVP status:', error);
    }

    if (!data) {
        throw redirect(302, '/register');
    }

    if (!data.accepted) {
        throw redirect(302, '/');
    }

    return {
        rsvpConfirmed: data?.rsvp ?? false
    };
};

export const actions: Actions = {
    default: async ({ locals }) => {
        const session = await locals.safeGetSession();
        const userId = session?.session?.user?.id;

        if (!userId) {
            return fail(401, { error: 'You must be logged in to confirm your attendance.' });
        }

        const { error } = await supabase
            .from('registration')
            .update({ rsvp: true })
            .eq('created_by', userId);

        if (error) {
            console.error('Error updating RSVP status:', error);
            return fail(500, { error: 'An error occurred while confirming your attendance.' });
        }

        throw redirect(302, '/rsvp');
    }
};
