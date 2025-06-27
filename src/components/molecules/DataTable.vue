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

<script setup>
import {
  TABLE_CELL_TYPE
} from '@/constants/content'
import { TableCell } from '@/components'
import {
  getColStyle,
  getNestedValue,
  getRatingComment
} from '@/utils/tableHelpers'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  tableColumnData: {
    type: Array,
    default: () => []
  }
})

const getCellType = (field) => {
  return TABLE_CELL_TYPE[field.scopedSlots?.customRender] ||
    TABLE_CELL_TYPE[field.key] ||
    'default'
}

const getCellValue = (item, field) => {
  return getNestedValue(item, field.key)
}
</script>

<style lang="scss" scoped>
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
