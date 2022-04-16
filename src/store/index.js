import { createStore } from 'vuex'
import category from './modules/category.modules'
import cart from './modules/cart.modules'
import auth from './modules/auth.module'

export default createStore({
  state: {
    userSession: null,
    cartToken: localStorage.getItem('CartToken'),
    messege: null, // {value: '', type: ''}
    // messege: {
    //   value: 'Тестовый алерт',
    //   type: 'bg-green-300'

    // },
    modal: false
  },
  getters: {
    getMessege(state) {
      return state.messege
    },
    getModal(state) {
      return state.modal
    }
  },
  mutations: {
    openModal(state) {
      state.modal = true
    },
    closeModal(state) {
      state.modal = false
    },
    setMessege(state, messege){
      state.messege = messege
    },
    clearMessege(state) {
      state.messege = null
    }
  },
  actions: {
    openModal({commit}) {
      commit('openModal')
    },
    closeModal({commit}) {
      commit('closeModal')
    },
    setMessege({commit}, messege) {
      commit('setMessege', messege)
    },
    clearMessege({commit}) {
      commit('clearMessege')
    }
  },
  modules: {
    category,
    cart,
    auth
  }
})
