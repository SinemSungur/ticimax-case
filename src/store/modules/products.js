import { defineStore } from 'pinia'
import axios from 'axios'
import { API_CONFIG, ERROR_MESSAGES } from '@/constants/content'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    totalItems: 0,
    loading: false,
    error: null,
    currentPage: 1,
    sort: '',
    itemsPerPage: 12
  }),

  getters: {
    sortedProducts: (state) => [...state.products],
    totalPages: (state) => Math.ceil(state.totalItems / state.itemsPerPage),
    hasProducts: (state) => state.products.length > 0,
    hasError: (state) => !!state.error,
    isLoading: (state) => state.loading
  },

  actions: {
    resetState() {
      this.products = []
      this.totalItems = 0
      this.loading = false
      this.error = null
      this.currentPage = 1
      this.sort = ''
    },

    clearError() {
      this.error = null
    },

    async fetchProducts({ page = 1, sort = '' } = {}) {
      this.loading = true
      this.error = null

      try {
        const limit = this.itemsPerPage
        const skip = (page - 1) * limit

        let url = `${API_CONFIG.BASE_URL}?limit=${limit}&skip=${skip}`

        if (sort) {
          url += `&sortBy=price&order=${sort}`
        }

        const response = await axios.get(url)
        const { products, total } = response.data

        this.products = products
        this.totalItems = total
        this.currentPage = page
        this.sort = sort
      } catch (error) {
        this.error = error.message || ERROR_MESSAGES.FETCH_PRODUCTS_ERROR
      } finally {
        this.loading = false
      }
    },

    setPage(page) {
      this.currentPage = page
    },

    setSort(sort) {
      this.sort = sort
    }
  }
})
