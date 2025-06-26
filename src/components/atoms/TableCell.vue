<template>
  <div class="table-cell">
    <component :is="componentName" v-bind="cellProps" />
  </div>
</template>

<script>
import {
  ImageCell,
  PriceCell,
  DescriptionCell,
  DiscountCell,
  AvailabilityCell,
  RatingCell,
  SizeCell,
  WeightCell,
  CategoryCell,
  DefaultCell
} from './cells'

export default {
  name: 'TableCell',
  components: {
    ImageCell,
    PriceCell,
    DescriptionCell,
    DiscountCell,
    AvailabilityCell,
    RatingCell,
    SizeCell,
    WeightCell,
    CategoryCell,
    DefaultCell
  },
  props: {
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
  },
  computed: {
    componentName() {
      const components = {
        image: 'ImageCell',
        description: 'DescriptionCell',
        price: 'PriceCell',
        discount: 'DiscountCell',
        availability: 'AvailabilityCell',
        rating: 'RatingCell',
        size: 'SizeCell',
        weight: 'WeightCell',
        category: 'CategoryCell'
      }
      return components[this.type] || 'DefaultCell'
    },
    cellProps() {
      const baseProps = { value: this.value }
      
      if (this.type === 'image') {
        return { ...baseProps, alt: this.alt }
      }
      
      if (this.type === 'rating') {
        return { ...baseProps, comment: this.comment }
      }
      
      return baseProps
    }
  }
}
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
