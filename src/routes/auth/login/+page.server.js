import { loginSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData, loginSchema);
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
		throw redirect(303, '/');
	}
};
