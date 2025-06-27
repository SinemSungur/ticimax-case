<template>
  <div class="table-cell">
    <component :is="cellComponent" v-bind="cellProps" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import * as Cells from './cells'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  value: {
    type: [String, Number, Object],
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  comment: {
    type: String,
    default: ''
  }
})

const cellComponent = computed(() => {
  const map = {
    image: Cells.ImageCell,
    description: Cells.DescriptionCell,
    price: Cells.PriceCell,
    discount: Cells.DiscountCell,
    availability: Cells.AvailabilityCell,
    rating: Cells.RatingCell,
    size: Cells.SizeCell,
    weight: Cells.WeightCell,
    category: Cells.CategoryCell
  }
  return map[props.type] || Cells.DefaultCell
})

const cellProps = computed(() => {
  if (props.type === 'image') return { value: props.value, alt: props.alt }
  if (props.type === 'rating') return { value: props.value, comment: props.comment }
  return { value: props.value }
})
</script>

<style lang="scss" scoped>
.table-cell {
  vertical-align: middle;
  word-break: break-word;
}

.image-cell {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.text-cell {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.description-cell {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price-cell {
  font-weight: 600;
  color: #059669;
}

.rating-cell {
  display: flex;
  align-items: center;
  gap: 4px;
}

.availability-cell {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}

.available {
  background-color: #d1fae5;
  color: #065f46;
}

.unavailable {
  background-color: #fee2e2;
  color: #991b1b;
}
</style>
