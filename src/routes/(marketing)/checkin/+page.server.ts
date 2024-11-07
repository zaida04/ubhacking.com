import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.safeGetSession();
	const userId = session?.session?.user?.id;
	if (!userId) {
		throw redirect(302, '/login');
	}
}
