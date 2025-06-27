<template>
  <div class="product-list-template">
    <div class="product-list-template__header">
      <h1>{{ PAGE_TITLES.PRODUCT_LIST }}</h1>
    </div>

    <div class="product-list-template__content">
      <ProductGrid
        :products="products"
        :loading="loading"
        :error="error"
        :current-page="currentPage"
        :total-pages="totalPages"
        :current-sort="currentSort"
        @retry="$emit('retry')"
        @sort-change="$emit('sort-change', $event)"
        @page-change="$emit('page-change', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ProductGrid } from '@/components'
import { PAGE_TITLES } from '@/constants/content'

defineProps({
  products: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  currentSort: {
    type: String,
    default: ''
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  }
})

defineEmits(['retry', 'sort-change', 'page-change'])
</script>

<style lang="scss" scoped>
.product-list-template {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    &__header {
        margin-bottom: 24px;
        text-align: center;

        h1 {
            font-size: 28px;
            font-weight: 600;
            color: #2c3e50;
            margin: 0;
        }
    }

    &__content {
        margin-bottom: 24px;
    }
}
</style>
