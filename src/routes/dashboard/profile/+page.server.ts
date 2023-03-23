import { invalidate } from '$app/navigation';
import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	changePlan: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) {
			throw redirect(302, '/auth/login');
		}
		const body = Object.fromEntries(await request.formData());
		try {
			const record = await locals.pb.collection('users').update(locals.user.id, body);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
	}
};
