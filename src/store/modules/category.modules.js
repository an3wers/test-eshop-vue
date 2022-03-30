import axios from 'axios'


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
        const { data } = await axios.get(
          'http://10.10.10.208:8000/catalog/all/'
        )

        commit('updateCategoryList', data)
      } catch (error) {
        console.log(error.message)
      }
    },
    
  }
  
}
