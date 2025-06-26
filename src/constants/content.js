export const PAGE_TITLES = {
  PRODUCT_LIST: 'Product List Application'
}

export const ERROR_MESSAGES = {
  NO_PRODUCTS_FOUND: 'No Products Found',
  NO_PRODUCTS_AVAILABLE: 'No products available on this page.',
  IMAGE_LOAD_FAILED: 'Image failed to load'
}

export const ALT_TEXT = {
  NO_DATA_ICON: 'No data icon',
  PRODUCT_IMAGE: 'Product image'
}

export const BUTTON_LABELS = {
  TRY_AGAIN: 'Try Again',
  PREVIOUS: '← Previous',
  NEXT: 'Next →',
  FIRST: 'First',
  LAST: 'Last'
}

export const LABELS = {
  SORT_BY_PRICE: 'Sort by Price:',
  PAGE_INFO: 'Page'
}

export const SORT_OPTIONS = [
  { value: '', label: 'Sort by Price' },
  { value: 'asc', label: 'Price (Low to High)' },
  { value: 'desc', label: 'Price (High to Low)' }
]

export const TABLE_COLUMNS = {
  IMAGE: 'Image',
  PRODUCT_NAME: 'Product Name',
  DESCRIPTION: 'Description',
  PRICE: 'Price ($)',
  DISCOUNT: 'Discount (%)',
  CATEGORY: 'Category',
  BRAND: 'Brand',
  STOCK: 'Stock',
  AVAILABILITY: 'Availability',
  MIN_ORDER_QTY: 'Min. Order Qty',
  SKU: 'SKU',
  BARCODE: 'Barcode',
  SIZE: 'Size (W×H×D)',
  WEIGHT: 'Weight (g)',
  AVG_RATING: 'Avg. Rating',
  WARRANTY: 'Warranty',
  SHIPPING_INFO: 'Shipping Info',
  RETURN_POLICY: 'Return Policy'
}

export const TABLE_COLUMN_KEYS = {
  THUMBNAIL: 'thumbnail',
  TITLE: 'title',
  DESCRIPTION: 'description',
  PRICE: 'price',
  DISCOUNT_PERCENTAGE: 'discountPercentage',
  CATEGORY: 'category',
  BRAND: 'brand',
  STOCK: 'stock',
  AVAILABILITY_STATUS: 'availabilityStatus',
  MINIMUM_ORDER_QUANTITY: 'minimumOrderQuantity',
  SKU: 'sku',
  BARCODE: 'meta.barcode',
  DIMENSIONS: 'dimensions',
  WEIGHT: 'weight',
  RATING: 'rating',
  WARRANTY_INFORMATION: 'warrantyInformation',
  SHIPPING_INFORMATION: 'shippingInformation',
  RETURN_POLICY: 'returnPolicy'
}

export const TABLE_COLUMN_WIDTHS = {
  IMAGE: 120,
  PRODUCT_NAME: 200,
  DESCRIPTION: 250,
  PRICE: 100,
  DISCOUNT: 120,
  CATEGORY: 120,
  BRAND: 120,
  STOCK: 80,
  AVAILABILITY: 120,
  MIN_ORDER_QTY: 120,
  SKU: 120,
  BARCODE: 160,
  SIZE: 180,
  WEIGHT: 100,
  AVG_RATING: 100,
  WARRANTY: 150,
  SHIPPING_INFO: 150,
  RETURN_POLICY: 150
}

export const SCOPED_SLOT_TYPES = {
  IMAGE_ACTION: 'imageAction',
  DESCRIPTION_ACTION: 'descriptionAction',
  PRICE_ACTION: 'priceAction',
  DISCOUNT_ACTION: 'discountAction',
  AVAILABILITY_ACTION: 'availabilityAction',
  RATING_ACTION: 'ratingAction'
}

export const DEFAULT_VALUES = {
  ITEMS_PER_PAGE: 12,
  DESCRIPTION_MAX_LENGTH: 100,
  CURRENCY_SYMBOL: '$',
  PERCENTAGE_SYMBOL: '%',
  WEIGHT_UNIT: 'g',
  DIMENSION_SEPARATOR: '×',
  TRUNCATE_SUFFIX: '...',
  PRICE_DECIMAL_PLACES: 2
}

export const API_CONFIG = {
  BASE_URL: 'https://dummyjson.com/products'
}

export const TABLE_COLUMNS_CONFIG = [
  {
    name: TABLE_COLUMNS.IMAGE,
    width: TABLE_COLUMN_WIDTHS.IMAGE,
    key: TABLE_COLUMN_KEYS.THUMBNAIL,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.IMAGE_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.PRODUCT_NAME,
    width: TABLE_COLUMN_WIDTHS.PRODUCT_NAME,
    key: TABLE_COLUMN_KEYS.TITLE
  },
  {
    name: TABLE_COLUMNS.DESCRIPTION,
    width: TABLE_COLUMN_WIDTHS.DESCRIPTION,
    key: TABLE_COLUMN_KEYS.DESCRIPTION,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.DESCRIPTION_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.PRICE,
    width: TABLE_COLUMN_WIDTHS.PRICE,
    key: TABLE_COLUMN_KEYS.PRICE,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.PRICE_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.DISCOUNT,
    width: TABLE_COLUMN_WIDTHS.DISCOUNT,
    key: TABLE_COLUMN_KEYS.DISCOUNT_PERCENTAGE,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.DISCOUNT_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.CATEGORY,
    width: TABLE_COLUMN_WIDTHS.CATEGORY,
    key: TABLE_COLUMN_KEYS.CATEGORY
  },
  {
    name: TABLE_COLUMNS.BRAND,
    width: TABLE_COLUMN_WIDTHS.BRAND,
    key: TABLE_COLUMN_KEYS.BRAND
  },
  {
    name: TABLE_COLUMNS.STOCK,
    width: TABLE_COLUMN_WIDTHS.STOCK,
    key: TABLE_COLUMN_KEYS.STOCK
  },
  {
    name: TABLE_COLUMNS.AVAILABILITY,
    width: TABLE_COLUMN_WIDTHS.AVAILABILITY,
    key: TABLE_COLUMN_KEYS.AVAILABILITY_STATUS,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.AVAILABILITY_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.MIN_ORDER_QTY,
    width: TABLE_COLUMN_WIDTHS.MIN_ORDER_QTY,
    key: TABLE_COLUMN_KEYS.MINIMUM_ORDER_QUANTITY
  },
  {
    name: TABLE_COLUMNS.SKU,
    width: TABLE_COLUMN_WIDTHS.SKU,
    key: TABLE_COLUMN_KEYS.SKU
  },
  {
    name: TABLE_COLUMNS.BARCODE,
    width: TABLE_COLUMN_WIDTHS.BARCODE,
    key: TABLE_COLUMN_KEYS.BARCODE
  },
  {
    name: TABLE_COLUMNS.SIZE,
    width: TABLE_COLUMN_WIDTHS.SIZE,
    key: TABLE_COLUMN_KEYS.DIMENSIONS
  },
  {
    name: TABLE_COLUMNS.WEIGHT,
    width: TABLE_COLUMN_WIDTHS.WEIGHT,
    key: TABLE_COLUMN_KEYS.WEIGHT
  },
  {
    name: TABLE_COLUMNS.AVG_RATING,
    width: TABLE_COLUMN_WIDTHS.AVG_RATING,
    key: TABLE_COLUMN_KEYS.RATING,
    scopedSlots: {
      customRender: SCOPED_SLOT_TYPES.RATING_ACTION
    }
  },
  {
    name: TABLE_COLUMNS.WARRANTY,
    width: TABLE_COLUMN_WIDTHS.WARRANTY,
    key: TABLE_COLUMN_KEYS.WARRANTY_INFORMATION
  },
  {
    name: TABLE_COLUMNS.SHIPPING_INFO,
    width: TABLE_COLUMN_WIDTHS.SHIPPING_INFO,
    key: TABLE_COLUMN_KEYS.SHIPPING_INFORMATION
  },
  {
    name: TABLE_COLUMNS.RETURN_POLICY,
    width: TABLE_COLUMN_WIDTHS.RETURN_POLICY,
    key: TABLE_COLUMN_KEYS.RETURN_POLICY
  }
]

export const AVAILABILITY_STATUS = {
  IN_STOCK: 'In Stock',
  OUT_OF_STOCK: 'Out of Stock',
  UNKNOWN: 'Unknown'
}

export const RATING_MESSAGES = {
  NO_REVIEWS: 'No reviews',
  NO_COMMENT: 'No comment available'
}
