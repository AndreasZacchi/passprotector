import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}
	return {
		user: undefined
	};
};
