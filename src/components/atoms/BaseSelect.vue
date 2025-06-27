<template>
  <div class="base-select">
    <select
      :value="value"
      class="base-select__input"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['input'])
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  display: inline-block;

  select {
    appearance: none;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    color: $text-color;
    cursor: pointer;
    min-width: 120px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }

    &:hover {
      border-color: #bbb;
    }
  }

  &::after {
    content: '▼';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 12px;
    color: #666;
  }
}
</style>
