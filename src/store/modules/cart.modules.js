import axios from 'axios'
import { cartApi, addCart, deleteFromCart, updateProductCart } from '@/api'
import { remove } from '@vue/shared'

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getCartToken(_, getters, rootState) {
      return rootState.cartToken
    },
    
  },
  mutations: {
    setProductToCart(state, product) {
      state.cart = product.cart_items
    },
    setSession(_, payload) {
      localStorage.setItem('CartToken', payload.session)
    },
    setCart(state, payload) {
      state.cart = payload.cart_items
    }
  },
  actions: {
    async addToCart({ commit, getters }, product) {
      let response = null
      if (getters.getCartToken) {
        const data = {
          productId: product.id
        }
        const headers = {
          CartToken: getters.getCartToken
        }

        response = await axios.post(addCart, data, { headers: headers })

        commit('setProductToCart', response.data)
      }
    },

    async deleFromCart({ commit, state, getters }, id) {
      
      const data = { productId: id }
      
      const headers = { CartToken: getters.getCartToken }
      try {
        const response = await axios.delete(deleteFromCart, {
          headers: headers,
          data: data
        })
        commit('setCart', response.data)
  
      } catch (error) {
        console.log(error.messege)
      }

      // console.log('Delete prod vuex', id)
    },

    async updateCountProduct({ commit, getters }, payload) {
      try {
        const data = {
          productId: payload.id,
          count: payload.count
        }
        const headers = {
          CartToken: getters.getCartToken
        }
        const response = await axios.put(updateProductCart, data, {
          headers: headers
        })
        if (response.status === 200) {
          commit('setCart', response.data)
        }
      } catch (error) {
        console.log(error.messege)
      }

      // console.log('Update count vuex: ', payload)
    },

    async updateCart({ commit, getters }) {
      let response = null
      const token = getters.getCartToken
      
      try {
        if (!getters.getCartToken) {
          // если токена нет
          response = await axios.post(cartApi) // в headers ничего не передаю
          if (response.status === 200) {
            commit('setSession', response.data)
          }
        } else {
          
          response = await axios.post(cartApi, {}, {
            headers: {
              'CartToken': token
            },
            withCredentials: true,
          })
          if (response.status === 200) {
            commit('setCart', response.data)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
