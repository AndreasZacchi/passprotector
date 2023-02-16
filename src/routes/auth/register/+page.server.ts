import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { z } from 'zod';

const registerSchema = z
	.object({
		email: z.string().trim().email(),
		password: z.string().min(8),
		passwordConfirm: z.string().min(8)
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({ code: 'custom', message: 'The passwords do not match!' });
		}
	});

export const load: ServerLoad = ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
};

export const actions: Actions = {
	register: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		try {
			const userData = registerSchema.parse(data);
			await locals.pb.collection('users').create({ ...userData });
		} catch (err) {
			if (err instanceof z.ZodError) {
				const email = data.email;
				const errors = err.flatten();
				return fail(400, { email, errors });
			}
		}

		throw redirect(303, '/auth/login');
	}
};
