import { error, redirect, type ServerLoad, type Actions } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(302, '/auth/login');
	}
};

export const actions: Actions = {
	updateProfile: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('users').requestEmailChange(data.email as string);
		} catch (err) {
			throw error(err.status, err.message);
		}

		return {
			success: true
		};
	}
};
