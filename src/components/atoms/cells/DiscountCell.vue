<template>
  <div class="discount-text">
    {{ formatDiscountMethod(value) }}
  </div>
</template>

<script setup>
import { formatDiscount } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: [String, Number],
    default: ''
  }
})

const formatDiscountMethod = (value) => formatDiscount(value)
</script>

<style lang="scss" scoped>
.discount-text {
  font-weight: 600;
  color: #e74c3c;
}
</style>
