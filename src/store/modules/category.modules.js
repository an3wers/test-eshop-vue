import axios from 'axios'
import { catalogURL } from '@/api'

export default {
  namespaced: true,
  state() {
    return {
      categoryList: [],
    }
  },
  getters: {
    getCategoryList(state) {
      return state.categoryList
    },
  },

  mutations: {
    updateCategoryList(state, payload) {
      state.categoryList = payload
    },
   
  },

  actions: {
    async updateCategoryList({ commit }) {
      try {
        
        const response = await axios.get(catalogURL)
        if(response.status == 200) {
          commit('updateCategoryList', response.data)
        }
        
      } catch (error) {
        console.log(error.message)
      }
    },
    
  }
  
}
