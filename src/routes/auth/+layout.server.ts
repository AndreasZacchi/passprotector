import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/dashboard/profile');
	}
};
