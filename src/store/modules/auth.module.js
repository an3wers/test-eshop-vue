import axios from 'axios'
import { regURL } from '@/api'

export default {
  namespaced: true,
  state() {
    return {
      authToken: null,
      registerUserId: null
    }
  },
  getters: {
    getAuthToken(state) {
      return state.authToken
    },
    getCartToken(_, getters, rootState) {
      return rootState.cartToken
    },
    getRegistUserId(state) {
      return state.registerUserId
    }
  },
  mutations: {},
  actions: {
    async register({ commit, getters, dispatch, state }, user) {
      // console.log(user)
      const data = user
      const headers = {
        CartToken: getters.getCartToken
      }
      try {
        const response = await axios.post(regURL, data, { headers: headers })

        if (response.status === 200) {
          console.log('РЕГИСТРАЦИЯ: ', response.data)

          if (response.data.id) {
            // если новый пользователь создался
            state.registerUserId = response.data.id
            dispatch('closeModal', null, { root: true })
            dispatch(
              'setMessege',
              {
                value: response.data.message,
                type: 'bg-green-300'
              },
              { root: true }
            )

            setTimeout(() => {
              dispatch('clearMessege', null, { root: true })
            }, 3000)
          } else {
            // Если регистрация не прошла

            dispatch(
              'setMessege',
              {
                value: response.data.message,
                type: 'bg-orange-300'
              },
              { root: true }
            )
            setTimeout(() => {
              dispatch('clearMessege', null, { root: true })
            }, 3000)
          }
        }
      } catch (error) {
        console.log(error.messege)
      }
    },
    login({commit}, user) {
      try {
        
      } catch (error) {
        
      }
    }
  }
}
