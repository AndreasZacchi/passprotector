import { generatePassword, getPassword } from '$lib/utils';
import { error, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

import { SECRET } from '$env/static/private';

export const load: ServerLoad = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(302, '/auth/login');
	}
};

export const actions: Actions = {
	generatePassword: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) {
			throw redirect(302, '/auth/login');
		}
		const body = Object.fromEntries(await request.formData());
		try {
			const data = {
				user: locals.user.id,
				website: body.website,
				password: generatePassword(SECRET)
			};

			const record = await locals.pb.collection('passwords').create(data);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
	}
};
