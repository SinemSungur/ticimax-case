<template>
  <div class="table-wrapper">
    <div ref="tableBody" class="table-main fixed-header">
      <table>
        <colgroup>
          <col v-for="(field, index) in tableColumnData" :key="index" :style="getColStyle(field)">
        </colgroup>
        <thead class="table-head">
          <tr>
            <th v-for="(field, index) in tableColumnData" :key="index">
              {{ field.name }}
            </th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr v-for="(item, index) in data" :key="item.id || index">
            <td v-for="(field, fieldIndex) in tableColumnData" :key="fieldIndex">
              <TableCell
                :type="getCellType(field)"
                :value="getCellValue(item, field)"
                :alt="item.title"
                :comment="getRatingComment(item)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  TABLE_COLUMN_KEYS,
  SCOPED_SLOT_TYPES
} from '@/constants/content'
import { TableCell } from '@/components'
import {
  getColStyle,
  getNestedValue,
  getRatingComment
} from '@/utils/tableHelpers'

export default {
  name: 'DataTable',
  components: {
    TableCell
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    tableColumnData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      TABLE_COLUMN_KEYS,
      SCOPED_SLOT_TYPES
    }
  },
  methods: {
    getColStyle,
    getNestedValue,
    getRatingComment,
    getCellType(field) {
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.IMAGE_ACTION) return 'image'
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.DESCRIPTION_ACTION) return 'description'
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.PRICE_ACTION) return 'price'
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.DISCOUNT_ACTION) return 'discount'
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.AVAILABILITY_ACTION) return 'availability'
      if (field.scopedSlots?.customRender === SCOPED_SLOT_TYPES.RATING_ACTION) return 'rating'
      if (field.key === TABLE_COLUMN_KEYS.DIMENSIONS) return 'size'
      if (field.key === TABLE_COLUMN_KEYS.WEIGHT) return 'weight'
      if (field.key === TABLE_COLUMN_KEYS.BARCODE) return 'barcode'
      if (field.key === TABLE_COLUMN_KEYS.CATEGORY) return 'category'
      return 'default'
    },
    getCellValue(item, field) {
      return getNestedValue(item, field.key)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.table-wrapper {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  min-height: fit-content;

  table {
    border: 1px solid #dadada;
    border-radius: 8px 8px 0px 0px;
    table-layout: fixed;
    width: 100%;
    margin: 0 auto;
  }

  .table-main {
    border: none;
    width: 100%;
    overflow: auto;
    &.fixed-header {
      th {
        position: sticky;
        top: 0;
        z-index: 2;
      }
    }
    & .table-head {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      width: 100%;
      white-space: nowrap;
      position: relative;
      text-align: left;
      & tr {
        & th {
          background: #f5f5f5;
          width: fit-content;
          padding: 16px;
          font-weight: 600;
          border-bottom: 1px solid #dadada;
          border-right: 1px solid #dadada;
          &:first-child {
            border-radius: 8px 0px 0px 0px;
          }
          &:last-child {
            border-radius: 0px 8px 0px 0px;
            border-right: none;
          }
        }
      }
    }
    & .table-body {
      & tr {
        padding: 16px;
        position: relative;

        & td {
          border-right: 1px solid #dadada;
          &:last-child {
            border-right: none;
          }
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    & td {
      border-bottom: 1px solid #dadada;
      background: #ffffff;
      text-align: left;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      font-family: $font-family-base;
      color: #484848;
      line-height: 17px;
      padding: 16px;
      vertical-align: middle;
    }
  }
}
</style>
