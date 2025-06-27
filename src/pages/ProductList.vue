<template>
  <div class="product-list-page">
    <ProductListTemplate
      :products="productsStore.sortedProducts"
      :loading="productsStore.isLoading"
      :error="productsStore.hasError"
      :current-sort="productsStore.sort"
      :current-page="productsStore.currentPage"
      :total-pages="productsStore.totalPages"
      @sort-change="handleSortChange"
      @page-change="handlePageChange"
      @retry="fetchProducts"
    />
  </div>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/store/modules/products'
import { ProductListTemplate } from '@/components'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()

const syncStateFromQuery = (query) => {
  const page = parseInt(query.page) || 1
  const sort = query.sort || ''
  productsStore.setPage(page)
  productsStore.setSort(sort)
}

const updateQuery = () => {
  const query = {}
  if (productsStore.currentPage > 1) {
    query.page = productsStore.currentPage
  }
  if (productsStore.sort) {
    query.sort = productsStore.sort
  }
  router.push({
    path: route.path,
    query
  }).catch(() => {})
}

const handleSortChange = (sortDirection) => {
  productsStore.setSort(sortDirection)
  updateQuery()
  productsStore.fetchProducts({
    page: productsStore.currentPage,
    sort: productsStore.sort
  })
}

const handlePageChange = (page) => {
  productsStore.setPage(page)
  updateQuery()
  productsStore.fetchProducts({
    page: productsStore.currentPage,
    sort: productsStore.sort
  })
}

const fetchProducts = () => {
  productsStore.fetchProducts({
    page: productsStore.currentPage,
    sort: productsStore.sort
  })
}

watch(() => route.query, (newQuery) => {
  syncStateFromQuery(newQuery)
}, { immediate: true })

onMounted(() => {
  syncStateFromQuery(route.query)
  fetchProducts()
})
</script>

<style lang="scss" scoped>
.product-list-page {
    min-height: 100vh;
    background-color: #f8f9fa;
}
</style>
