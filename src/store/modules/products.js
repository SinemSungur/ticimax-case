import axios from 'axios'
import { API_CONFIG } from '@/constants/content'

const state = {
  products: [],
  loading: false,
  error: null,
  totalItems: 0,
  currentPage: 1,
  sort: '',
  itemsPerPage: 12
}

const getters = {
  sortedProducts: state => [...state.products],
  totalItems: state => state.totalItems
}

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_TOTAL_ITEMS(state, totalItems) {
    state.totalItems = totalItems
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page
  },
  SET_SORT(state, sort) {
    state.sort = sort
  }
}

const actions = {
  async fetchProducts({ commit, state }, { page = 1, sort = '' } = {}) {
    commit('SET_LOADING', true)
    commit('SET_ERROR', null)

    try {
      const limit = state.itemsPerPage
      const skip = (page - 1) * limit

      let url = `${API_CONFIG.BASE_URL}?limit=${limit}&skip=${skip}`

      if (sort) {
        url += `&sortBy=price&order=${sort}`
      }

      const response = await axios.get(url)
      const { products, total } = response.data

      commit('SET_PRODUCTS', products)
      commit('SET_TOTAL_ITEMS', total)
      commit('SET_CURRENT_PAGE', page)
      commit('SET_SORT', sort)
    } catch (error) {
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
