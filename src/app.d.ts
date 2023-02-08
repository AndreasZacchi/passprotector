import PocketBase, { BaseAuthStore } from 'pocketbase';

declare global {
	declare namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			pb: PocketBase;
			user: BaseAuthStore;
		}
	}
}

export {};
