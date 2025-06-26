<template>
  <div class="sort-control">
    <BaseSelect :value="currentSort" :options="sortOptions" @input="$emit('sort-change', $event)" />
  </div>
</template>

<script>
import { BaseSelect } from '@/components'
import { SORT_OPTIONS } from '@/constants/content'

export default {
  name: 'SortControl',
  components: {
    BaseSelect
  },
  props: {
    currentSort: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sortOptions: SORT_OPTIONS
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-control {
    display: flex;
    align-items: center;
}
</style>
