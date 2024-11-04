import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase";

/**
 * On load we get credentials and check them in 
 * in the database.
 */
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.safeGetSession();
	const userId = session?.session?.user?.id;
	if (!userId) {
		throw redirect(302, '/login');
	}

	const q_isAccepted = await supabase
		.from('registration')
		.select('accepted, name_first, name_last')
		.eq('created_by', userId)



	if (q_isAccepted.error || !q_isAccepted.data) {
		console.error('Error fetching acceptance status')
		return {
			checked_in: false,
			reason: `Error fetching acceptance status: ${q_isAccepted.error}`
		}
	}

	if (!q_isAccepted.data[0].accepted) {
		console.error('User not accepted')
		return {
			checked_in: false,
			reason: 'You have not been accepted into the hackathon yet. Please speak to an organizer.'
		}
	}



	const q_checkIn = await supabase
		.from('registration')
		.update({ 'checked_in': true })
		.eq('created_by', userId)

	if (q_checkIn.error) {
		console.error('Error checking in...', q_checkIn.error)
		return {
			checked_in: false,
			reason: `Something went wrong while updating check in status: ${q_checkIn.error}`
		}
	}

	const { name_first, name_last } = q_isAccepted.data[0]
	const fullName = `${name_first} ${name_last}`
	return {
		checked_in: true,
		fullName,
		reason: "Success"
	}
}
