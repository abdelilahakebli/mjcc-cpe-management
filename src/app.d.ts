// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from 'pocketbase'
import type {AuthModel} from 'pocketbase'

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
            pb: PocketBase,
			user: AuthModel
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
