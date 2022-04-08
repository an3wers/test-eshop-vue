<template>
  <div class="cart-product flex py-8 space-x-4">
    <div class="cart-product__img w-40">
      <img :src="`${baseHost}${product.icon}`" class="object-cover" alt="" />
    </div>
    <div class="cart-product__body flex grow flex-col">
      <div class="cart-product__title">{{ product.product_stock.name }}</div>
      <div class="cart-product__size text-slate-500">XL</div>
      <div class="cart-product__price font-semibold mt-4">
        {{ product.price }}
      </div>
    </div>
    <div class="cart-product__count basis-20">
      <select
        name="cart-count"
        v-model="count"
        class="form-select rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
      >
        <option
          v-for="(defCount, index) in product.valid_count"
          :value="defCount"
          :key="index"
        >
          {{ defCount }}
        </option>
        <!-- <option value="2">2</option> -->
      </select>
    </div>
    <div class="cart-product__remove">
      <span @click="remove(product.product_stock.id)"
        ><XIcon class="h-6 w-6 text-slate-400 hover:text-slate-500"
      /></span>
    </div>
  </div>
</template>

<script>
import { baseHost} from '@/api'
import { XIcon } from '@heroicons/vue/outline'
import {ref, watch} from 'vue'
export default {
  components:{
      XIcon
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['remove', 'updateCount'],

  setup(props, {emit}) {
      const count = ref('')
      const defCount = 1
      count.value = props.product.count

      const remove = (id) => {
        emit('remove', id)
      }

    const udpateCout = (val) => {
      emit('updateCount', {...props.product.product_stock, count: val})
    }

    watch(count, (val) => {

      udpateCout(val)
      // console.log('Count: ', val)
    })
     
      return {
          count,
          defCount,
          remove,
          baseHost
      }
  }
}
</script>
