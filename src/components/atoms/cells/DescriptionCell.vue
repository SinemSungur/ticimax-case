<template>
  <div class="description-text">
    {{ truncateText(value, DEFAULT_VALUES.DESCRIPTION_MAX_LENGTH) }}
  </div>
</template>

<script>
import { DEFAULT_VALUES } from '@/constants/content'
import { truncateText } from '@/utils/tableHelpers'

export default {
  name: 'DescriptionCell',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      DEFAULT_VALUES
    }
  },
  methods: {
    truncateText
  }
}
</script>

<style lang="scss" scoped>
.description-text {
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.4;
}
</style>
