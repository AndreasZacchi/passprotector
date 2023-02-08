import type { BaseAuthStore } from 'pocketbase';

export const serializeNonPOJOS = (obj: BaseAuthStore) => {
	return structuredClone(obj);
};
