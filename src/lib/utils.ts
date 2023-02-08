import type { BaseAuthStore } from 'pocketbase';

export const serializeNonPOJOS = (obj: BaseAuthStore) => {
	return structuredClone(obj);
};

export const validateData = async (formData: FormData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};
