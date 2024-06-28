import { redirect, type RequestHandler } from "@sveltejs/kit";


export const POST = async ({locals}) => {
    if (locals.user) {
        locals.pb.authStore.clear()
    }

    return redirect(303, "/")
}