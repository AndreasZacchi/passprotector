import { encryptUserPassword, generatePassword, getPassword } from '$lib/utils';
import { error, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

import { SECRET } from '$env/static/private';

export const load: ServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(302, '/auth/login');
	}

	const records = await locals.pb.collection('passwords').getFullList(200, {
		sort: '-website',
		filter: `user.id="${locals.user.id}"`
	});

	if (records[0] !== undefined) {
		let passwords = new Array();
		records.forEach((e) => {
			passwords.push([e.id, e.website, getPassword(e.password, SECRET)]);
		});
		return {
			passwords
		};
	}
};

export const actions: Actions = {
	generatePassword: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) {
			throw redirect(302, '/auth/login');
		}
		const body = Object.fromEntries(await request.formData());
		try {
			let data = {
				user: locals.user.id,
				website: body.website,
				password: generatePassword(SECRET, false)
			};
			if (body.userPassword) {
				data = {
					user: locals.user.id,
					website: body.website,
					password: encryptUserPassword(body.userPassword.toString(), SECRET)
				};
			}

			const record = await locals.pb.collection('passwords').create(data);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
	},
	deletePassword: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) {
			throw redirect(302, '/auth/login');
		}
		const body = Object.fromEntries(await request.formData());
		try {
			const result = await locals.pb.collection('passwords').delete(body.website.toString());
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
	},
	editPassword: async ({ locals, request }) => {
		if (!locals.pb.authStore.isValid) {
			throw redirect(302, '/auth/login');
		}
		const body = Object.fromEntries(await request.formData());
		try {
			const data = {
				user: locals.user.id,
				website: body.website,
				password: encryptUserPassword(body.newPassword.toString(), SECRET)
			};

			const record = await locals.pb
				.collection('passwords')
				.update(body.websiteID.toString(), data);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}
	}
};
