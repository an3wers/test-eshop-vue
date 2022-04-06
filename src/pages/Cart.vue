<template>
  <div id="cart">
    <div class="container">
      <!-- Компонент хлебных крошек -->
      <!-- mt-8 нужно будет убрать, когда будут хлебные крошик -->
      <h1 class="text-4xl uppercase my-8 mb-8">Shopping cart</h1>
      
      <div v-if="getCart.length > 0" class="card-body grid grid-cols-1 lg:grid-cols-12 gap-x-6 my-8">
        <div class="lg:col-start-1 lg:col-end-8">
          <div class="card-body__list flex flex-col divide-y">
            
            <cart-product @remove="handleRemove" @updateCount="handleUpdate" v-for="prod in getCart" :key="prod.id" :product="prod" />
            
          </div>
        </div>
        <div class="lg:col-start-9 lg:col-end-12">
          <div class="cart-btn">
            <button
                type="submit"
                class=" w-full flex items-center uppercase justify-center px-8 py-2 border border-transparent text-base rounded-md bg-slate-900 hover:bg-slate-800 text-white"
              >
                Checkout
              </button>
          </div>
        </div>
      </div>
      <div v-else>
        Cart is empty
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {onMounted, computed, ref} from 'vue'
import CartProduct from '@/components/cart/cart.product.vue'

export default {
  components: {
    CartProduct
    },
  setup() {
    const store = useStore()

    const getCart = computed(() => {
      return store.getters['cart/getCart']
    })

    const handleRemove = (id) => {

      store.dispatch('cart/deleFromCart', id)

    }

    const handleUpdate = (payload) => {
      store.dispatch('cart/updateCountProduct', payload)
    }

    onMounted( () =>{
     
    })

    return {
      getCart,
      handleRemove,
      handleUpdate
    }
  }
}
</script>

<style scoped>
 .card-body__list > .cart-product:first-child {
   padding-top: 0 !important;
 }
</style>
