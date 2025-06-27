import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/pages/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
