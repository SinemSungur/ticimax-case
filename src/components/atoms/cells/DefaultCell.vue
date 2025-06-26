<template>
  <span class="default-text">{{ value || '' }}</span>
</template>

<script>
export default {
  name: 'DefaultCell',
  props: {
    value: {
      type: [String, Number, Object],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.default-text {
  color: #484848;
}
</style>
