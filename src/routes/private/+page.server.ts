import { redirect, error } from '@sveltejs/kit';
import type {} from './$types'




export const actions = {

  logout: async ({locals, request}) => {
    
    if (request.method != "POST") throw error(405, 'Method Not Allowed');
    if ( locals.pb.authStore.isValid){
      locals.pb.authStore.clear()
    }
    throw redirect(303, '/auth/login')
  },

}