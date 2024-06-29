// import type { ServerLoadEvent } from '@sveltejs/kit';
// import type { LayoutServerLoadEvent } from './$types'

import type { Detainee } from '$lib/types.js';
import {PB_REST_API} from '$env/static/private'
export const load = async ({ locals, request }) => {
    if (locals.pb.authStore.isValid){

        const resultList = await locals.pb.collection('cpe_detainee').getList(1, 50, {
            // filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
            sort: '-created'
        });
        let detainees:Detainee[] = []

        resultList.items.forEach(detainee => {
            const newdetainee:Detainee = {
                id: detainee.id,
                cpe_id: detainee.cpe_id,
                name: detainee.name,
                name_ar: detainee.name_ar,
                date_of_birth: detainee.date_of_birth,
                photo: detainee.photo ? locals.pb.files.getUrl(detainee, detainee.photo, {
                    token: locals.pb.files.getToken()
                }) : null
            }

            detainees.push(newdetainee)
        });
        
        return {
            user: locals.user,
            detainees: detainees
        }
    }
}