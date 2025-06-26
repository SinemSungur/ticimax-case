<template>
  <div class="discount-text">
    {{ formatDiscount(value) }}
  </div>
</template>

<script>
import { formatDiscount } from '@/utils/tableHelpers'

export default {
  name: 'DiscountCell',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    formatDiscount
  }
}
</script>

<style lang="scss" scoped>
.discount-text {
  font-weight: 600;
  color: #e74c3c;
}
</style>
