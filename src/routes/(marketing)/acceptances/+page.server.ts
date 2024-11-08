import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const allowedUserIds = ["ef6a7d79-5fa4-4bca-ae82-9df737d66768", "ac3e6b07-2887-4ae2-8f08-9e34bf5c9d7d", "7938e1e3-bb83-41c9-b3c5-77fc53c1ba02", "6eabf94c-31c5-439f-ad4a-1f89b16fcb27", "5c52d015-a8ba-49cf-8d2a-bae5fd3e3706", "92e93c66-a48c-4658-8c24-31eebb1ba557", "c71c54bf-f764-4b05-9f3d-dcbc57ea5c10", "659a17ae-c3af-454e-84ec-1ce3fc372146", "f3c19660-3c09-472a-83a8-6665643ee1bc", "c787ec03-0a0f-4c7e-8211-726a2d50fef0", "fc6694b6-ce85-4c23-87dd-d55cb92e6420", "54cacdcd-c987-475f-8a7c-54f482792dff"];

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.safeGetSession();
    const userId = session?.session?.user?.id;

    if (!userId) {
        throw redirect(302, '/login');
    }

    if (!allowedUserIds.includes(userId)) {
        throw redirect(302, '/');
    }

    return {
        status: 200,
        body: {
            message: 'Welcome, authorized user!'
        }
    };
};
