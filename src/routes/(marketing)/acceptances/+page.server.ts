import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const allowedUserIds = ["f3c19660-3c09-472a-83a8-6665643ee1bc", "c787ec03-0a0f-4c7e-8211-726a2d50fef0", "fc6694b6-ce85-4c23-87dd-d55cb92e6420", "54cacdcd-c987-475f-8a7c-54f482792dff"];

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
