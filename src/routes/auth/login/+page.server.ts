import { redirect, error } from '@sveltejs/kit';
import type {} from './$types'




export const actions = {

  login: async ({locals, request}) => {
    
    const formData = await request.formData();
    let data = Object.fromEntries([...formData])

    if (data.username == null  && data.password == null){
      return
    }
    const username:string = data.username.toString()
    const password:string = data.password.toString()

    try {

      await locals.pb.collection('users').authWithPassword(
        username,
        password,
      ) 


    } catch (err) {
      return {
        error: true,
        email: username
      }
    
    }

    throw redirect(303, "/auth/warning")
  }
}