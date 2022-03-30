<template>
  <div id="category">
    <div class="container">
      <h1 v-if="getC">
{{ getC.name }}
      </h1>

        
        
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const title = ref({})

    const getAlias = computed(() => {
        return route.params.category
    })
    
    const getC = computed(() => {
         const result = [...store.getters['category/getCategoryList']]
         return result.find(el => el.slug === getAlias.value)
    })
    

    return {

       
       getC
     
    }
  }
}
</script>
