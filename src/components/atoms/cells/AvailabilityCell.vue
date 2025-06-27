<template>
  <div class="availability-cell" :class="getAvailabilityClassMethod(value)">
    {{ formatAvailabilityMethod(value) }}
  </div>
</template>

<script setup>
import { formatAvailability, getAvailabilityClass } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: String,
    default: ''
  }
})

const formatAvailabilityMethod = (value) => formatAvailability(value)
const getAvailabilityClassMethod = (value) => getAvailabilityClass(value)
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
