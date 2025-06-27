<template>
  <div class="description-text">
    {{ truncateTextMethod(value, DEFAULT_VALUES.DESCRIPTION_MAX_LENGTH) }}
  </div>
</template>

<script setup>
import { DEFAULT_VALUES } from '@/constants/content'
import { truncateText } from '@/utils/tableHelpers'

defineProps({
  value: {
    type: String,
    default: ''
  }
})

const truncateTextMethod = (value, maxLength) => truncateText(value, maxLength)
</script>

<style lang="scss" scoped>
.description-text {
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.4;
}
</style>
