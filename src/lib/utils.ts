import type { Admin, Record } from 'pocketbase';

export const serializeNonPOJOS = (obj: Record | Admin | null) => {
	return structuredClone(obj);
};
