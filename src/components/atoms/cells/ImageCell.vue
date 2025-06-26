<template>
  <div class="image-container">
    <img
      :src="value"
      :alt="alt"
      class="product-image"
      loading="lazy"
      @error="handleImageError"
    >
  </div>
</template>

<script>
import { handleImageError } from '@/utils/tableHelpers'

export default {
  name: 'ImageCell',
  props: {
    value: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleImageError
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;

  .product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    background-color: #f9f9f9;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
