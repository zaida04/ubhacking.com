import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase";


// Per Yazgi: 
// users may check in if they are accepted, rsvp'd, and flagged (her final manual verification)
const userCanCheckIn = async (userID: string) => {
	const { data, error } = await supabase
		.from('registration')
		.select('accepted, rsvp, flagged')
		.eq('created_by', userID)

	if (error || !data) {
		console.error('Error fetching registration:', error);
		return false;
	}

	if (!data.length) return false;

	const { accepted, rsvp, flagged } = data[0];

	return accepted;
}

const checkinUser = async (userID: string) => {
	const { error } = await supabase
		.from('registration')
		.update({ 'checked_in': true })
		.eq('created_by', userID)

	if (error) {
		console.error('Error checking in user:', error.message)
		return false;
	}
	return true
}

const getUserName = async (userID: string) => {
	const { data, error } = await supabase
		.from('registration')
		.select('name_first, name_last')
		.eq('created_by', userID)
	if (error || !data) {
		console.error('Error fetching user name:', error);
		return "Unknown User";
	}
	const { name_first, name_last } = data[0];
	return `${name_first} ${name_last}`
}

const updateUserConfirmation = async (userID: string, confirmed: boolean) => {
	const { error } = await supabase
		.from('registration')
		.update({ 'communication': confirmed })
		.eq('created_by', userID)

	if (error) {
		console.error('Error updating user confirmation:', error.message)
	}
}

/**
 * On load we get credentials and check them in 
 * in the database.
 */
export const load: PageServerLoad = async ({ locals, url }) => {
	const session = await locals.safeGetSession();
	const userId = session?.session?.user?.id;
	if (!userId) {
		throw redirect(302, '/login');
	}
	const confirm = url.searchParams.get('confirm')
	await updateUserConfirmation(userId, confirm === 'true')

	const canCheckIn = await userCanCheckIn(userId);
	if (!canCheckIn) {
		return {
			checked_in: false,
			reason: "You have not been accepted to UBHacking / You have not filled out an application. Please speak to an organizer"
		}
	}

	const checkedIn = await checkinUser(userId)

	if (!checkedIn) {
		return {
			checked_in: false,
			reason: `Something went wrong while updating check in status`
		}
	}

	const fullName = await getUserName(userId)
	return {
		checked_in: true,
		fullName,
		reason: "Success"
	}
}
