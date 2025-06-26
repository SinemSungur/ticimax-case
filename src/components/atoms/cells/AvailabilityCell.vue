<template>
  <div class="availability-cell" :class="getAvailabilityClass(value)">
    {{ formatAvailability(value) }}
  </div>
</template>

<script>
import { formatAvailability, getAvailabilityClass } from '@/utils/tableHelpers'

export default {
  name: 'AvailabilityCell',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    formatAvailability,
    getAvailabilityClass
  }
}
</script>

<style lang="scss" scoped>
.availability-cell {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;

  &.available {
    background-color: #d1fae5;
    color: #065f46;
  }

  &.unavailable {
    background-color: #fee2e2;
    color: #991b1b;
  }

  &.unknown {
    background-color: #f3f4f6;
    color: #6b7280;
  }
}
</style>
