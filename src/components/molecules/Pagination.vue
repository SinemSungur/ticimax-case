<template>
  <nav class="pagination">
    <BaseButton
      :disabled="currentPage === 1"
      class="pagination-btn"
      @click="$emit('page-change', 1)"
    >
      {{ buttonLabels.FIRST }}
    </BaseButton>
    <BaseButton
      :disabled="currentPage === 1"
      class="pagination-btn"
      @click="$emit('page-change', currentPage - 1)"
    >
      {{ buttonLabels.PREVIOUS }}
    </BaseButton>
    <span class="pagination-info">
      {{ labels.PAGE_INFO }} {{ currentPage }} / {{ totalPages }}
    </span>
    <BaseButton
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      @click="$emit('page-change', currentPage + 1)"
    >
      {{ buttonLabels.NEXT }}
    </BaseButton>
    <BaseButton
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      @click="$emit('page-change', totalPages)"
    >
      {{ buttonLabels.LAST }}
    </BaseButton>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { BaseButton } from '@/components'
import { BUTTON_LABELS, LABELS } from '@/constants/content'

const buttonLabels = ref(BUTTON_LABELS)
const labels = ref(LABELS)

defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['page-change'])

defineOptions({
  name: 'BasePagination'
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 16px;

  .pagination-button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: white;
    color: $text-color;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: $primary-color;
      color: white;
      border-color: $primary-color;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.active {
      background: $primary-color;
      color: white;
      border-color: $primary-color;
    }
  }

  .page-info {
    font-size: 14px;
    color: $text-color;
    margin: 0 16px;
  }
}
</style>
