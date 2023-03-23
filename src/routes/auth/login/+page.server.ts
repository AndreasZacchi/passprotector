import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(data.email.toString(), data.password.toString());
		} catch (err) {
			if (err instanceof ClientResponseError) {
				const email = data.email;
				const error = 'Wrong email or password.';
				return fail(400, { email, error });
			}
		}
		throw redirect(303, '/dashboard/profile');
	}
};
