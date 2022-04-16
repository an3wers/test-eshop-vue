<template>
  <div id="category">
    <div class="container">
      <!-- Сделать функционал хлебных крошек -->
      <app-breadcrumbs :items="items" />
      <h1 class="text-4xl uppercase mb-8" v-if="getCategory">
          {{ getCategory.name }}
      </h1>

      <!-- {{ $route }} -->

      <div v-if="products">

        <div class="products-section my-8">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:grid-cols-4">
            <category-product v-for="prod in products" :key="prod.id" :item="prod" />
          </div>
        </div>


        <!-- Сделать функционал постраничной навигации -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
import axios from 'axios'
import CategoryProduct from '@/components/category/category.product.vue'
import {baseHost} from '@/api'

export default {
  components: {
    AppBreadcrumbs,
    CategoryProduct
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    // const title = ref('')
    const items = ref([])
    const products = ref([])
    const page = ref(1)

    const getAlias = computed(() => {
        return route.params.category
    })

    const getPeth = computed(() => {
      return route
    })
    
    const getCategory = computed(() => {
         const result = [...store.getters['category/getCategoryList']]
         const currentCat = result.find(el => el.slug === getAlias.value)
         return currentCat
    })
  
    watch([getAlias, getCategory], (newVals, oldVals)  => {
      getProd(newVals[0], page.value)
      // items.value.push(newVals[1])
    })

    onMounted(() => {
      // console.log(title.value)
      getProd(getAlias.value, page.value)
    })
    //  http://10.10.10.208:8000/catalog/Noski/?page=1
    const getProd = async (alias, num) => {

      try {
        const response = await axios.get(`${baseHost}/catalog/${alias}/?page${num}`)
        products.value = response.data.current_page.object_list
      } catch (error) {
        console.log(error)
      }

      
    }

    return {

       getCategory,
       products,
       items
     
    }
  }
}
</script>
