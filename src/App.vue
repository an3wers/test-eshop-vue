<template>
  <!-- Header -->
  <app-header />
  <div class="wrapper">
    <router-view />
  </div>
  <!-- Footer -->
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import { onMounted } from 'vue'

import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const updateCategoryList = () => {


      store.dispatch('category/updateCategoryList')
    }

    onMounted(() => {
      updateCategoryList()
    })
  },

  components: {
    AppHeader,
    AppFooter
  },



}
</script>
