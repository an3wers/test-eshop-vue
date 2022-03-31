<template>
    <router-link :to="{name: 'product', params:{product: item.id}}">
       <div class="section-product">
    <div class="section-product__img mb-2 w-full">
      <img
        :src="`${baseHost}${item.icon_url}`"
        class="h-full w-full object-cover"
        alt=""
      />
    </div>
    <div class="section-product__title">{{item.name}}</div>
    <div class="section-product__price">{{item.price}}₽</div>
  </div> 
    </router-link>
  
</template>

<script>

import { baseHost } from '@/api'
export default {
  props: {
    item: {
      type: Object,
      requred: true
    }
  },
  setup() {
     
      
      return{
          baseHost
      }
  }
}
</script>
