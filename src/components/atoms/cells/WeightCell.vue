<template>
  <div class="weight-text">
    {{ formatWeight(value) }}
  </div>
</template>

<script>
import { formatWeight } from '@/utils/tableHelpers'

export default {
  name: 'WeightCell',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    formatWeight
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.weight-text {
  font-family: $font-family-base;
  font-size: 13px;
}
</style>
