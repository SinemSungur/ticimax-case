<template>
  <div class="rating-container">
    <span class="rating-value">{{ value }}</span>
    <span class="rating-comment">{{ comment }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  comment: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>

.rating-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .rating-value {
    font-weight: 600;
    color: #2c3e50;
    font-size: 14px;
    font-family: $font-family-base;
  }

  .rating-comment {
    font-size: 11px;
    color: #6c757d;
    font-style: italic;
    font-family: $font-family-serif;
  }
}
</style>
