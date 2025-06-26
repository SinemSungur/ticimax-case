<template>
  <div class="product-list-page">
    <ProductListTemplate
      :products="products"
      :loading="loading"
      :error="error"
      :current-sort="currentSort"
      :current-page="currentPage"
      :total-pages="totalPages"
      @sort-change="handleSortChange"
      @page-change="handlePageChange"
      @retry="fetchProducts"
    />
  </div>
</template>

<script>
import { ProductListTemplate } from '@/components'
import { mapState, mapActions } from 'vuex'
import { DEFAULT_VALUES } from '@/constants/content'

export default {
  name: 'ProductList',
  components: {
    ProductListTemplate
  },
  data() {
    return {
      currentPage: 1,
      currentSort: '',
      itemsPerPage: DEFAULT_VALUES.ITEMS_PER_PAGE
    }
  },
  computed: {
    ...mapState('products', ['products', 'loading', 'error', 'totalItems']),
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    }
  },
  watch: {
    $route(to) {
      this.syncStateFromQuery(to.query)
    }
  },
  mounted() {
    this.syncStateFromQuery(this.$route.query)
    this.fetchProducts({ page: this.currentPage, sort: this.currentSort })
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    syncStateFromQuery(query) {
      const page = parseInt(query.page) || 1
      const sort = query.sort || ''
      
      this.currentPage = page
      this.currentSort = sort
    },
    updateQuery() {
      const query = {}
      if (this.currentPage > 1) {
        query.page = this.currentPage
      }
      if (this.currentSort) {
        query.sort = this.currentSort
      }
      
      this.$router.push({
        path: this.$route.path,
        query
      }).catch(() => {})
    },
    handleSortChange(sortDirection) {
      this.currentSort = sortDirection
      this.updateQuery()
      this.fetchProducts({
        page: this.currentPage,
        sort: this.currentSort
      })
    },
    handlePageChange(page) {
      this.currentPage = page
      this.updateQuery()
      this.fetchProducts({
        page: this.currentPage,
        sort: this.currentSort
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list-page {
    min-height: 100vh;
    background-color: #f8f9fa;
}
</style>
