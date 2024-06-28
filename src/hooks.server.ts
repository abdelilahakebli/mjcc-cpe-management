import PocketBase from 'pocketbase'
import { PB_REST_API } from '$env/static/private'
import { sequence } from '@sveltejs/kit/hooks'
import { type Handle, redirect } from '@sveltejs/kit'


const pocketbase: Handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase(PB_REST_API);

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    event.locals.user = null;

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = event.locals.pb.authStore.model
        try {
            // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
            await event.locals.pb.collection('users').authRefresh();
        } catch (_) {
            // clear the auth store on failed refresh
            event.locals.pb.authStore.clear();
        }

    }


    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}


const authGuard: Handle = async ({ event, resolve }) => {
    

    if (!event.locals.user && event.url.pathname != '/auth/login') {
        return redirect(303, '/auth/login')
    }
    
    if (event.locals.user && event.url.pathname === '/auth/login') {
        return redirect(303, '/private')
    }

    if (event.url.pathname == "/") return redirect(303, '/private')


    return resolve(event)
}

export const handle: Handle = sequence(pocketbase, authGuard)