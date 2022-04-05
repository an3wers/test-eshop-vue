<template>
  <div id="product">
    <div class="container">
      <!-- Breadcrumbs -->

      <!-- # Breadcrumbs -->
      <!-- Product body -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 my-8">
        <div class="images-wrapper">
          <div
            v-for="img in product.gallery"
            :key="img.id"
            class="product-image w-full mb-2"
          >
            <img :src="`${baseHost}${img.url}`" :alt="product.name" />
          </div>
        </div>

        <div class="product-body">
          <div class="sticky top-0">
            <h1 class="product-body__title text-xl mb-2">{{ product.name }}</h1>
            <div class="product-body__price text-xl font-bold">
              {{ product.price }}₽
            </div>
            <!-- Selectors -->
            <div
              class="product-body__selectors selectors flex flex-col space-y-3 my-6"
            >
              <!-- <div class="selectors__colors">
                <div class="selectors__title text-slate-500 my-2">
                  Select color
                </div>
                <div class="selectors__body">
                  <div class="selectors__params flex space-x-2">
                    
                    <label
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer ring ring-offset-1 focus:outline-none ring-gray-400"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="White"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only">White</p>
                      <span
                        aria-hidden="true"
                        class="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"
                      ></span>
                    </label>
                    <label
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="White"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only">White</p>
                      <span
                        aria-hidden="true"
                        class="h-8 w-8 bg-black border border-black border-opacity-10 rounded-full"
                      ></span>
                    </label>
                  </div>
                </div>
              </div> -->
              <div class="selectors__sizes">
                <div class="selectors__title text-slate-500 my-2">
                  Select size
                </div>
                <div class="selectors__body">
                  <div class="flex space-x-2">
                    <select
                      class="form-select w-80 rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
                      name="size"
                      v-model="sizeField"
                      v-if="productStock.length"
                    >
                      <option selected disabled value="default">
                        Select size
                      </option>
                      <option
                        v-for="(size, index) in productSizes"
                        :key="index"
                        :value="size.value"
                      >
                        {{ size.value }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- # Selectors -->

            <!-- Вывести сюда доступный сток в зависимости от выбранного параметра size -->
            <div v-if="getAvailibleStock">In stock: {{ getAvailibleStock }}</div>
            <!-- Button -->
            <div class="product-body__button my-6">
              <button
                type="submit"
                :disabled="getAddCertIsAvailable"
                :class="[
                  getAddCertIsAvailable
                    ? 'bg-slate-400 hover:bg-slate-400'
                    : 'bg-slate-900 hover:bg-slate-800'
                ]"
                @click.prevent="add(product)"
                class="w-80 flex items-center uppercase justify-center px-8 py-2 border border-transparent text-base rounded-md ho text-white"
              >
                {{getCurrentProductStockToCart ? 'In cart' : 'Add to cart'}}
              </button>
            </div>
            <!-- # Button -->
            
            <!-- Description -->
            <div class="product-body__description description my-6">
              <div class="description__title text-slate-500 my-2">
                Description
              </div>
              <div v-if="productStock.length" class="description__body">
                <div v-for="stock in productStock" :key="stock.id">
                  <p v-for="prop in stock.property" :key="prop.id">
                    <span class="font-semibold">{{ prop.property_type }}</span
                    >: <span>{{ prop.value }}</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- # Description -->
          </div>
        </div>
      </div>
      <!-- # Product body -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { baseHost } from '@/api'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const product = ref({})
    const productStock = ref([])
    const productSizes = ref([])
    const productId = route.params.product
    const addCertIsAvailable = ref(true)
    const sizeField = ref('default')
    // const availibleStock = ref(null)

    onMounted(() => {
      getProduct(productId)
    })

    // Получаем продукт
    const getProduct = async id => {
      try {
        const response = await axios.get(`${baseHost}/product/${id}/`)

        // Получаем продукт
        if (response.status == 200) {
          product.value = response.data
          productStock.value = response.data.stock

          // Заполняем массив с размерами
          response.data.stock.forEach(element => {
            element.property.forEach(p => {
              if (p.property_type === 'Размер') {
                productSizes.value.push({
                  value: p.value,
                  productId: element.id
                })
              }
            })
          })
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    // Получаем массив Корзины из стора
    const getCart = computed(() => {
      return store.getters['cart/getCart']
    })

    

    // Переписать функционал доступности товара для добавления
    // Зависит от: доступно ли количество товара, добавлен ли уже товар в корзину, выбран ли размер

    // ?? работает, но не понятно норм или нет
    watch([product, sizeField], vals => {
      //  setIsAddedCart(vals[0])
      // setIsAddedCart()
      //  Следим за полем sizeField
      // if (vals[1] !== 'default') {
      //   addCertIsAvailable.value = false
      // }
    })

    const getSizeField = computed(() => {
      return sizeField.value
    })

    // Переписать функционал доступности товара для добавления
    // Зависит от: доступно ли количество товара, добавлен ли уже товар в корзину, выбран ли размер
    // Это должен быть компьютед
    // const setIsAddedCart = function () {
    //   const cartArr = [...getCart.value]
    //   const currentSize = productSizes.value.find(
    //     el => el.value === getSizeField.value
    //   )
    //   if (currentSize) {
    //     const currentProd = cartArr.find(el => el.id === currentSize.productId)
    //     if (currentProd) {
    //       addCertIsAvailable.value = true
    //     }
    //   }
    // }
    // Получаем флаг доступности кнопки Add to Cart

    const getCurrentProductStockToCart = computed(() => {
      if(getCurrentSize.value) {
        const currentProductStockToCart = getCart.value.find(el => el.product_stock.id === getCurrentSize.value.productId)

        if(currentProductStockToCart) {
          return true
        } else {
          return false
        }
         
      }
      
    })

    const getAddCertIsAvailable = computed(() => {
      
      if(getSizeField.value !== 'default' && getAvailibleStock.value > 0 && !getCurrentProductStockToCart.value) {
        
        return !addCertIsAvailable.value
        
      } else {
        return addCertIsAvailable.value
      }

      
    })

    // Получение доступного стока по выбранному товару
    const getAvailibleStock = computed(() => {

      if(getCurrentSize.value) {
        const currentProd = productStock.value.find(p => p.id === getCurrentSize.value.productId)
        if(currentProd) {
          return currentProd.count
        }
      }

      return false
    })

    const getCurrentSize = computed(() => {
      return productSizes.value.find(el => el.value === getSizeField.value)
    })

    // Добавление товара в корзину
    const add = function (product) {
      const stock = [...product.stock] // получаем массив продуктов из стока

      const currentSize = productSizes.value.find(
        el => el.value === getSizeField.value
      )
      const currentProdStock = stock.find(
        prod => prod.id === currentSize.productId
      )

      // console.log(currentProdStock)
      // const resultProd = { ...currentProdStock, qty: 1 }
      addCertIsAvailable.value = true
      store.dispatch('cart/addToCart', currentProdStock)
    }

    return {
      product,
      baseHost,
      productStock,
      add,
      getAddCertIsAvailable,
      sizeField,
      productSizes,
      getAvailibleStock,
      getCurrentProductStockToCart
    }
  }
}
</script>
