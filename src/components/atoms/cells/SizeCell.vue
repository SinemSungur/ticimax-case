<template>
  <div class="size-text">
    {{ formatDimensions(value) }}
  </div>
</template>

<script>
import { formatDimensions } from '@/utils/tableHelpers'

export default {
  name: 'SizeCell',
  props: {
    value: {
      type: [String, Object],
      default: ''
    }
  },
  methods: {
    formatDimensions
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.size-text {
  font-family: $font-family-base;
  font-size: 13px;
}
</style>
