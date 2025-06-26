<template>
  <div class="category-text">
    {{ capitalizeFirstLetter(value) }}
  </div>
</template>

<script>
import { capitalizeFirstLetter } from '@/utils/tableHelpers'

export default {
  name: 'CategoryCell',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    capitalizeFirstLetter
  }
}
</script>

<style lang="scss" scoped>
.category-text {
  font-weight: 500;
  color: #2c3e50;
  text-transform: capitalize;
}
</style>
