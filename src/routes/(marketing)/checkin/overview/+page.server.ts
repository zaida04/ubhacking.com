import { supabase } from '$lib/supabase';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const allowedUserIds = ["cf18ba56-b2ab-4407-bdd0-525080ae4d98", "659a17ae-c3af-454e-84ec-1ce3fc372146", "f3c19660-3c09-472a-83a8-6665643ee1bc", "c787ec03-0a0f-4c7e-8211-726a2d50fef0", "fc6694b6-ce85-4c23-87dd-d55cb92e6420", "54cacdcd-c987-475f-8a7c-54f482792dff", "7938e1e3-bb83-41c9-b3c5-77fc53c1ba02"];

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.safeGetSession();
	const userId = session?.session?.user?.id;

	if (!userId) {
		throw redirect(302, '/login');
	}

	if (!allowedUserIds.includes(userId)) {
		throw redirect(302, '/');
	}

	try {
		const checkedIn = await fetchCheckedIn();
		return { checkedIn };
	} catch (error: any) {
		return {
			checkedIn: [],
		}
	}
};

const fetchCheckedIn = async () => {
	const { data, error } = await supabase
		.from("registration")
		.select("id, name_first, name_last, contact_email, checked_in_at")
		.eq("checked_in", true);

	if (error) {
		throw new Error(error.message);
	} else {
		return data;
	}
};


