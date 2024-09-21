import { supabase } from '$lib/supabase';
import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
    const { url } = event;
    const code = url.searchParams.get('code') as string;
    const next = url.searchParams.get('next') ?? '/apply';

    if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            throw redirect(303, `/${next.slice(1)}`);
        }
    }

    // return the user to an error page with instructions
    throw redirect(303, '/auth/auth-code-error');
};