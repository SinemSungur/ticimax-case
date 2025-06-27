<template>
  <button :class="buttonClasses" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  return [
    'base-button',
    { 'base-button--disabled': props.disabled }
  ]
})
</script>

<style scoped>
.base-button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
}

.base-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.base-button:hover:not(:disabled) {
    filter: brightness(0.9);
}

.base-button--disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
