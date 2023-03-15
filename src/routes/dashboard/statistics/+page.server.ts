import { encryptUserPassword, generatePassword, getPassword } from '$lib/utils';
import { error, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

import { SECRET } from '$env/static/private';

export const load: ServerLoad = async ({ locals }) => {
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
