import PocketBase, { type AuthModel } from "pocketbase"
import { writable } from "svelte/store";
import {env} from '$env/dynamic/private'

export const pb:PocketBase = new PocketBase(env.PB_REST_API)
export const authUser = writable(pb.authStore.model)
export const login = async (username:string, password:string) => {
    await pb.collection('users').authWithPassword(
        username,
        password,
    );
}
export const logout = () => {
    pb.authStore.clear()
}
pb.authStore.onChange( auth => {
    authUser.set(pb.authStore.model)
} )