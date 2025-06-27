<template>
  <div class="weight-text">
    {{ formatWeightMethod(value) }}
  </div>
</template>

<script setup>
import { formatWeight } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: [String, Number],
    default: ''
  }
})

const formatWeightMethod = (value) => formatWeight(value)
</script>

<style lang="scss" scoped>

.weight-text {
  font-family: $font-family-base;
  font-size: 13px;
}
</style>
