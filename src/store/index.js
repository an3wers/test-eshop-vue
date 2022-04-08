import { createStore } from 'vuex'
import category from './modules/category.modules'
import cart from './modules/cart.modules'

export default createStore({
  state: {
    userSession: null,
    cartToken: localStorage.getItem('CartToken')
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    cart
  }
})
