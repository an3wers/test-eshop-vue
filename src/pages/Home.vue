<template>
  <div id="home">
    <!-- Первый экран -->
    <div
      style="background-image: url('/assets/hero.jpg')"
      class="hero bg-cover bg-no-repeat flex justify-center items-center"
    >
      <div class="container">
        <div class="hero__body flex flex-col justify-center space-y-4">
          <div class="hero__title text-center text-4xl uppercase">
            New spring collection
          </div>
          <div class="hero__button text-center">
            <a class="underline inline-flex" href="#">
              <span>Shop the collection</span>
              <img
                src="@/assets/icons/arrow-narrow-right.svg"
                class="w-6 ml-1"
                alt="arrow-right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- # Первый экран -->

    <div class="container">
      <!-- Продукты -->
      <div class="products-section my-24">
        <h2 class="text-3xl leading-normal uppercase mb-10 text-black">
          New collection
        </h2>

        <div v-if="products" class="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:grid-cols-4">

          <!-- <category-product v-for="prod in products" :key="prod.id" :item="prod" /> -->

          <router-link v-for="prod in products" :key="prod.id" :to="{name: 'product', params:{category: 'noski', product: prod.id}}">
              <div class="section-product">
                  <div class="section-product__img mb-2 w-full">
                      <img :src="`${baseHost}${prod.icon_url}`" class=" h-full w-full object-cover" alt="">
                  </div>
                  <div class="section-product__title">{{prod.name}}</div>
                  <div class="section-product__price">{{prod.price}}</div>
              </div>
            </router-link>

          <!-- <router-link to="/category/product">
              <div class="section-product">
                  <div class="section-product__img mb-2 w-full">
                      <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                  </div>
                  <div class="section-product__title">Urban raincoat gray</div>
                  <div class="section-product__price">$510.00</div>
              </div>
            </router-link>
            

            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div>
            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div>
            <div class="section-product">
                <div class="section-product__img mb-2 w-full">
                    <img src="@/assets/products/9.jpg" class=" h-full w-full object-cover" alt="">
                </div>
                <div class="section-product__title">Urban raincoat gray</div>
                <div class="section-product__price">$510.00</div>
            </div> -->
        </div>
      </div>
      <!-- # Продукты -->
    </div>
  </div>
</template>

<script>
import { newCollection, baseHost } from '@/api'
import axios from 'axios'
import CategoryProduct from '@/components/category/category.product.vue'
import { onMounted, ref } from 'vue'

export default {
  components: {
    CategoryProduct
  },
  setup() {
    const products = ref([])

    onMounted(() => {
      getProdNewCol()
    })

    const getProdNewCol = async () => {
      try {
        const response = await axios.get(newCollection)
        
        if(response.status === 200) {
          products.value = response.data
          // console.log(products.value)
        }
        
        
      } catch (error) {
        console.log(error)
      }
    }
    return {
      products,
      baseHost
    }
  }
}
</script>
