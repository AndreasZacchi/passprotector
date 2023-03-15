import { redirect, type ServerLoad } from '@sveltejs/kit';
import { getPassword } from '$lib/utils';
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
