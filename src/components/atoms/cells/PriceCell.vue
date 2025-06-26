<template>
  <div class="price-text">
    {{ formatPrice(value) }}
  </div>
</template>

<script>
import { formatPrice } from '@/utils/tableHelpers'

export default {
  name: 'PriceCell',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    formatPrice
  }
}
</script>

<style lang="scss" scoped>
.price-text {
  font-weight: 600;
  color: #2c3e50;
}
</style>
