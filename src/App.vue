<template>

  <!-- Header -->
  <app-header />
  <div class="wrapper">
    <router-view />
  </div>
  <!-- Footer -->
  <Transition name="messege">
    <app-messege v-if="isMessege" />
  </Transition>
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
// import { updateSession } from '@/updateUserSession'

import { computed, onMounted } from 'vue'

import { useStore } from 'vuex'
import AppMessege from '@/components/AppMessege.vue'

export default {
  setup() {
    const store = useStore()

    const updateCategoryList = async () => {
      await store.dispatch('category/updateCategoryList')
    }

    const isMessege = computed(() => {
      return store.getters['getMessege']
    })

    const updateCart = async () => {
     await store.dispatch('cart/updateCart')
    }

    onMounted(() => {
      // Получение структуры каталога
      updateCategoryList()

      // Обновление корзины
      updateCart()

      // console.log('rootState', store.getters['cart/getCartToken'])
      
    })

    return {
      isMessege
    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppMessege,
    
  }
}
</script>
<style>

.messege-enter-from, .messege-leave-to {
  opacity: 0;
  transform: translateX(35px);

}

.messege-enter-to, .messege-leave-from{
  opacity: 1;
  transform: translateX(0);
}

.messege-enter-active, .messege-leave-active {
  transition: all 0.25s ease-in-out;
}


</style>