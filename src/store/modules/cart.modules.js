import axios from 'axios'
import { cartApi, addCart, deleteFromCart, updateProductCart } from '@/api'

export default {
  namespaced: true,
  state() {
    return {
      cart: []
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    }
  },
  mutations: {
    setProductToCart(state, product) {
      // const currenProduct = state.cart.find(el => el.id === product.id)
      // if (currenProduct) {
      //   // update product
      //   state.cart = state.cart.map(el => {
      //     if (el.id === currenProduct.id) {
      //       el.qty += 1
      //     }
      //     return el
      //   })
      // } else {
      //   state.cart.push(product)
      // }

      state.cart = product.cart_items
    },
    setSession(_, payload) {
      // console.log('Set session: ', payload)
      localStorage.setItem('sessionId', payload.session)
    },
    setCart(state, payload) {
      state.cart = payload.cart_items
    }
  },
  actions: {
    async addToCart({ commit }, product) {
      const sessionId = localStorage.getItem('sessionId')
      let response = null

      if (sessionId) {
        response = await axios.post(addCart, {
          sessionId: sessionId,
          productId: product.id
        })

        commit('setProductToCart', response.data)
        // console.log(response.data)
      }
    },

    async deleFromCart({ commit }, id) {
      const sessionId = localStorage.getItem('sessionId')

      try {
        const response = await axios.delete(deleteFromCart, {
          data: {
            sessionId: sessionId,
            productId: id
          }
        })
        commit('setCart', response.data)
      } catch (error) {
        console.log(error.messege)
      }

      // console.log('Delete prod vuex', id)
    },

    async updateCountProduct({ commit }, payload) {
      const sessionId = localStorage.getItem('sessionId')
      try {
        const response = await axios.put(updateProductCart, {
          sessionId: sessionId,
          productId: payload.id,
          count: payload.count
        })
        if (response.status === 200) {
          commit('setCart', response.data)
        }
      } catch (error) {
        console.log(error.messege)
      }

      // console.log('Update count vuex: ', payload)
    },

    async updateCart({ commit }) {
      let sessionId = localStorage.getItem('sessionId')
      let response = null
      try {
        if (!sessionId) {
          response = await axios.post(cartApi, {})
          if (response.status === 200) {
            commit('setSession', response.data)
          }
        } else {
          // console.log(sessionId)
          response = await axios.post(cartApi, {
            sessionId: sessionId
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
