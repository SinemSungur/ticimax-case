<template>
  <span class="default-text">{{ value || '' }}</span>
</template>

<script setup>
defineProps({
  value: {
    type: [String, Number, Object],
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.default-text {
  color: #484848;
}
</style>
