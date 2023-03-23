import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { z } from 'zod';
import { isValidCard } from '$lib/utils';

const registerSchema = z
	.object({
		email: z.string().trim().email(),
		password: z.string().min(8),
		passwordConfirm: z.string().min(8),
		plan: z.string()
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({ code: 'custom', message: 'The passwords do not match!' });
		}
	});
const creditCardSchema = z
	.object({
		number: z.string().trim(),
		name: z.string(),
		month: z.string().max(2).min(1),
		year: z.string().max(2).min(1),
		cvc: z.string().length(3)
	})
	.superRefine(({ month, year, number }, ctx) => {
		const today = new Date();
		const ed = new Date();
		ed.setFullYear(parseInt(year) + 2000, parseInt(month), 0);

		if (ed < today) {
			ctx.addIssue({
				code: 'custom',
				path: ['invalidCCDate'],
				message: 'The credit card is expired!'
			});
		}
		if (!isValidCard(number).validCard) {
			ctx.addIssue({
				code: 'custom',
				path: ['invalidCC'],
				message: 'The credit card number is invalid'
			});
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
		const creditCard = {
			number: data.ccnumber,
			name: data.ccname,
			month: data.ccmonth,
			year: data.ccyear,
			cvc: data.cccvc
		};
		const User = {
			email: data.email,
			password: data.password,
			passwordConfirm: data.passwordConfirm,
			plan: data.plan
		};
		// TODO: Add credit card processing
		try {
			const userData = registerSchema.parse(User);
			if (data.plan != 'Free') {
				const creditCardData = creditCardSchema.parse(creditCard);
			}
			await locals.pb.collection('users').create({ ...userData });
		} catch (err) {
			if (err instanceof z.ZodError) {
				const errors = err.flatten();
				const email = data.email;
				return fail(400, { email, errors });
			}
		}

		throw redirect(303, '/auth/login');
	}
};
