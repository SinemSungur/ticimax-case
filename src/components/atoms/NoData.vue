<template>
  <div class="no-data">
    <div class="no-data__icon">
      <img src="@/assets/icons/no-data.svg" :alt="ALT_TEXT.NO_DATA_ICON">
    </div>
    <h3 class="no-data__title">
      {{ title }}
    </h3>
    <p class="no-data__message">
      {{ message }}
    </p>
    <BaseButton
      v-if="showRetryButton"
      class="no-data__retry-button"
      @click="$emit('retry')"
    >
      {{ retryButtonText }}
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { ERROR_MESSAGES, BUTTON_LABELS, ALT_TEXT } from '@/constants/content'

export default {
  name: 'NoData',
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      default: ERROR_MESSAGES.NO_PRODUCTS_FOUND
    },
    message: {
      type: String,
      default: ERROR_MESSAGES.NO_PRODUCTS_AVAILABLE
    },
    showRetryButton: {
      type: Boolean,
      default: false
    },
    retryButtonText: {
      type: String,
      default: BUTTON_LABELS.TRY_AGAIN
    }
  },
  data() {
    return {
      ALT_TEXT
    }
  }
}
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  min-height: 300px;

  &__icon {
    margin-bottom: 16px;
    opacity: 0.6;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #495057;
    margin: 0 0 8px 0;
  }

  &__message {
    font-size: 14px;
    color: #6c757d;
    margin: 0 0 24px 0;
    max-width: 400px;
    line-height: 1.5;
  }
}
</style>
