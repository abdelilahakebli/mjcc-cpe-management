import type { LayoutServerLoadEvent } from './$types'

export const load = ({ locals, request }) => {
    if (locals.pb.authStore.isValid){
        return {
            user: locals.user
        }
    }
}