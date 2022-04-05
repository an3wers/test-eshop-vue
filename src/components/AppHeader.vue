<template>
  <nav class="bg-slate-100 py-4">
    <div class="container">
      <div class="nav flex justify-between">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo-eshop.svg" alt="" />
          </router-link>
        </div>
        <div class="flex space-x-6">
          <router-link class="no-underline hover:underline" to="/"
            >Home</router-link
          >
          <!-- Dropdown menu -->
          <!-- :to="`/${cat.slug}`" -->
          <!-- <a class="no-underline hover:underline" href="#">Shop</a> -->

          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex items-center justify-center no-underline hover:underline"
              >
                Shop
                <ChevronDownIcon class="ml-1 h-4 w-4" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem
                    v-for="cat in getCategorylist"
                    :key="cat.id"
                    v-slot="{ active }"
                  >

                 
                    <router-link
                      
                      :to="{name: 'category', params:{category: `${cat.slug}`, title: `${cat.name}`}}"
                     
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      ]"
                      >{{ cat.name }}</router-link
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <!-- # Dropdown menu -->
          <router-link class="no-underline hover:underline" :to="{name: 'about', params: {title: 'About'}}"
            >About</router-link
          >
        </div>
        <div class="flex space-x-4">
          <a href="#">
            <img src="@/assets/icons/user.svg" class="w-6" alt="profile" />
          </a>
          <a href="#">
            <img src="@/assets/icons/search.svg" class="w-6" alt="search" />
          </a>
          <div class="divaider"></div>
          <router-link class="header-cart flex items-center" to="/cart">
            <img
              src="@/assets/icons/shopping-cart.svg"
              class="w-6 mr-1"
              alt=""
            />
            <span class="header-cart-counter">{{getCart.length}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    
    const getCategorylist = computed(() => {
      return store.getters['category/getCategoryList']
    })

    const getCart = computed(() => {
      return store.getters['cart/getCart']
    })

    return {
      getCategorylist,
      getCart
    }
  },

  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  }
}
</script>
