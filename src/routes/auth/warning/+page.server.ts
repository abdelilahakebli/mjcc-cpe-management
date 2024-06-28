import { redirect, error } from '@sveltejs/kit';
import type {} from './$types'




export const actions = {

  accept: async ({locals, request}) => {
    throw redirect(303, "/private")
  },

}