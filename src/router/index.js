import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Category from '@/pages/Category.vue'
import Product from '@/pages/Product.vue'

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
    path: '/shop/:category',
    name: 'category',
    component: Category
  },
  {
    path: '/shop/category/product',
    name: 'product',
    component: Product
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
