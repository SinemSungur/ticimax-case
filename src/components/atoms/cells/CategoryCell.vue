<template>
  <div class="category-text">
    {{ capitalizeFirstLetterMethod(value) }}
  </div>
</template>

<script setup>
import { capitalizeFirstLetter } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: String,
    default: ''
  }
})

const capitalizeFirstLetterMethod = (value) => capitalizeFirstLetter(value)
</script>

<style lang="scss" scoped>
.category-text {
  font-weight: 500;
  color: #2c3e50;
  text-transform: capitalize;
}
</style>
