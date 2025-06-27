<template>
  <div class="sort-control">
    <BaseSelect :value="currentSort" :options="sortOptions" @input="$emit('sort-change', $event)" />
  </div>
</template>

<script setup>
import { BaseSelect } from '@/components'
import { SORT_OPTIONS } from '@/constants/content'

defineProps({
  currentSort: {
    type: String,
    default: ''
  }
})

defineEmits(['sort-change'])

const sortOptions = SORT_OPTIONS
</script>

<style lang="scss" scoped>
.sort-control {
    display: flex;
    align-items: center;
}
</style>
