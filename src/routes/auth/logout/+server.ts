import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const POST: ServerLoad = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = locals.pb.authStore;

	throw redirect(303, '/');
};
