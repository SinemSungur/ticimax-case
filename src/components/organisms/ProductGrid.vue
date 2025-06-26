<template>
  <div class="product-grid">
    <div v-if="loading" class="product-grid__loading">
      <BaseSpinner />
    </div>

    <div v-else-if="error" class="product-grid__error">
      <NoData
        :title="ERROR_MESSAGES.GENERAL_ERROR"
        :message="ERROR_MESSAGES.FETCH_PRODUCTS_ERROR"
        :show-retry-button="true"
        @retry="$emit('retry')"
      />
    </div>

    <div v-else-if="!products || products.length === 0" class="product-grid__no-data">
      <NoData
        :title="ERROR_MESSAGES.NO_PRODUCTS_FOUND"
        :message="ERROR_MESSAGES.NO_PRODUCTS_AVAILABLE"
        :show-retry-button="true"
        @retry="$emit('retry')"
      />
    </div>

    <div v-else class="product-grid__content">
      <div class="product-grid__sort">
        <SortControl
          :current-sort="currentSort"
          @sort-change="$emit('sort-change', $event)"
        />
      </div>

      <div class="product-grid__table">
        <DataTable
          :data="products"
          :table-column-data="TABLE_COLUMNS_CONFIG"
        />
      </div>

      <div class="product-grid__pagination">
        <BasePagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="$emit('page-change', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseSpinner, SortControl, BasePagination, DataTable, NoData } from '@/components'
import {
  ERROR_MESSAGES,
  TABLE_COLUMNS_CONFIG
} from '@/constants/content'

export default {
  name: 'ProductGrid',
  components: {
    BaseSpinner,
    SortControl,
    BasePagination,
    DataTable,
    NoData
  },
  props: {
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
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentSort: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ERROR_MESSAGES,
      TABLE_COLUMNS_CONFIG
    }
  }
}
</script>

<style lang="scss" scoped>
.product-grid {
    width: 100%;

    &__loading,
    &__error,
    &__no-data {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
    }

    &__content {
        width: 100%;
    }

    &__sort {
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        background-color: #f9f9f9;
    }

    &__table {
        width: 100%;
    }

    &__pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>
