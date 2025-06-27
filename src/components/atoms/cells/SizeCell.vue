<template>
  <div class="size-text">
    {{ formatDimensionsMethod(value) }}
  </div>
</template>

<script setup>
import { formatDimensions } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: [String, Object],
    default: ''
  }
})

const formatDimensionsMethod = (value) => formatDimensions(value)
</script>

<style lang="scss" scoped>

.size-text {
  font-family: $font-family-base;
  font-size: 13px;
}
</style>
