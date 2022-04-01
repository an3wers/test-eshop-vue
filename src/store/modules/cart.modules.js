import axios from 'axios'

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

      const currenProduct = state.cart.find(el => el.id === product.id)
      if(currenProduct) {
        state.cart = state.cart.map(el => {
            if(el.id === currenProduct.id) {
              el.qty += 1
          }
            return el
        })
      } else {
        state.cart.push(product)
      }
      
    }
  },
  actions: {
    addToCart({commit}, product){
      commit('setProductToCart', product)
    }
  }
}
