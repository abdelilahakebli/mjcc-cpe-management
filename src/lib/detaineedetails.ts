import type { Writable } from 'svelte/store';
import { writable } from "svelte/store"
import type {Detainee} from './types'


export const detainee:Writable<Detainee|null> = writable(null)



