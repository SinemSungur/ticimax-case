<template>
  <nav class="pagination">
    <BaseButton
      :disabled="currentPage === 1"
      class="pagination-btn"
      @click="$emit('page-change', 1)"
    >
      {{ BUTTON_LABELS.FIRST }}
    </BaseButton>
    <BaseButton
      :disabled="currentPage === 1"
      class="pagination-btn"
      @click="$emit('page-change', currentPage - 1)"
    >
      {{ BUTTON_LABELS.PREVIOUS }}
    </BaseButton>
    <span class="pagination-info">
      {{ LABELS.PAGE_INFO }} {{ currentPage }} / {{ totalPages }}
    </span>
    <BaseButton
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      @click="$emit('page-change', currentPage + 1)"
    >
      {{ BUTTON_LABELS.NEXT }}
    </BaseButton>
    <BaseButton
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      @click="$emit('page-change', totalPages)"
    >
      {{ BUTTON_LABELS.LAST }}
    </BaseButton>
  </nav>
</template>

<script>
import { BaseButton } from '@/components'
import { BUTTON_LABELS, LABELS } from '@/constants/content'

export default {
  name: 'BasePagination',
  components: {
    BaseButton
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      BUTTON_LABELS,
      LABELS
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 20px 0;
    flex-wrap: wrap;

    .pagination-info {
        font-size: 14px;
        color: $text-secondary;
        font-weight: 500;
        min-width: 80px;
        text-align: center;
    }
}
</style>
