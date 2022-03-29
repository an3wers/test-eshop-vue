<template>
  <div id="category">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
 

    const getCategorylist = computed(() => {
      const result = store.getters['category/getCategoryList']
      return result
    })

    
    return {
      route,
      
   
    }
  }
}
</script>
