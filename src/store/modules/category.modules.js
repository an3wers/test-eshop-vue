export default {
    namespaced: true,
    state() {
        return {
           categoryList: [] 
        }
    },
    getters: {
          getCategoryList(state) {
            return state.categoryList
        }
    },

    mutations: {
        async updateCategoryList(state, payload) {
            state.categoryList = await payload
        }
    },

    actions: {
        async updateCategoryList({commit}) {
            
           try {

            const response = await fetch('http://10.10.10.208:8000/catalog/all/')
            
            commit('updateCategoryList', response.json())
               
           } catch (error) {
               console.log(error.message)
           }           

        }
    },
}