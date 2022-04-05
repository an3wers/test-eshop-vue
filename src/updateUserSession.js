import axios from "axios";
import { cartApi } from '@/api'

// export const updateSession = async () => {
   
//     let getSessionId = localStorage.getItem('sessionId')
//     let response = null

//     try {
        
//         if(!getSessionId) {
//             response = axios.post(cartApi, {})
//             if(response.status === 200) {
//                 console.log('Session: ', response.data)
//             }
//         } else {
//             response = axios.post(cartApi, {
//                 'sessionId': getSessionId
//             })
//             if(response.status === 200) {
//                 console.log('Session: ', response.data)
//             }
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
// }