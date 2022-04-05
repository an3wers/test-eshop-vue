import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Category from '@/pages/Category.vue'
import Product from '@/pages/Product.vue'
import Cart from '@/pages/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/:category',
    name: 'category',
    component: Category,
    // children: [{
    //   path: '/:category/:product',
    //   name: 'product',
    //   component: Product
    // }]
  },
  {
    path: '/:category/:product',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
