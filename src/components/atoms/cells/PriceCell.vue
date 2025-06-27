<template>
  <div class="price-text">
    {{ formatPrice(value) }}
  </div>
</template>

<script setup>
import { formatPrice } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: [String, Number],
    default: ''
  }
})

defineOptions({ name: 'PriceCell' })
</script>

<style lang="scss" scoped>
.price-text {
  font-weight: 600;
  color: #2c3e50;
}
</style>
