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

<script>
export default {
  name: 'BaseSelect',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true,
      validator: options => options.every(option =>
        typeof option === 'object' &&
        'value' in option &&
        'label' in option
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.base-select {
  position: relative;

  &__input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid $border-color;
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    cursor: pointer;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    &:hover {
      border-color: darken($border-color, 10%);
    }
  }
}
</style>
