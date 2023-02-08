import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const POST = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/');
};
