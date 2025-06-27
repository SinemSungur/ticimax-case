export const PAGE_TITLES = {
  PRODUCT_LIST: 'Product List Application'
}

export const ERROR_MESSAGES = {
  NO_PRODUCTS_FOUND: 'No Products Found',
  NO_PRODUCTS_AVAILABLE: 'No products available on this page.',
  IMAGE_LOAD_FAILED: 'Image failed to load',
  GENERAL_ERROR: 'Something went wrong',
  FETCH_PRODUCTS_ERROR: 'Failed to fetch products'
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

export const TABLE_CELL_TYPE = {
  imageAction: 'image',
  descriptionAction: 'description',
  priceAction: 'price',
  discountAction: 'discount',
  availabilityAction: 'availability',
  ratingAction: 'rating',
  dimensions: 'size',
  weight: 'weight',
  category: 'category'
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
    name: 'Image',
    width: 120,
    key: TABLE_COLUMN_KEYS.THUMBNAIL,
    scopedSlots: {
      customRender: 'imageAction'
    }
  },
  {
    name: 'Product Name',
    width: 200,
    key: TABLE_COLUMN_KEYS.TITLE
  },
  {
    name: 'Description',
    width: 250,
    key: TABLE_COLUMN_KEYS.DESCRIPTION,
    scopedSlots: {
      customRender: 'descriptionAction'
    }
  },
  {
    name: 'Price ($)',
    width: 100,
    key: TABLE_COLUMN_KEYS.PRICE,
    scopedSlots: {
      customRender: 'priceAction'
    }
  },
  {
    name: 'Discount (%)',
    width: 120,
    key: TABLE_COLUMN_KEYS.DISCOUNT_PERCENTAGE,
    scopedSlots: {
      customRender: 'discountAction'
    }
  },
  {
    name: 'Category',
    width: 120,
    key: TABLE_COLUMN_KEYS.CATEGORY
  },
  {
    name: 'Brand',
    width: 120,
    key: TABLE_COLUMN_KEYS.BRAND
  },
  {
    name: 'Stock',
    width: 80,
    key: TABLE_COLUMN_KEYS.STOCK
  },
  {
    name: 'Availability',
    width: 120,
    key: TABLE_COLUMN_KEYS.AVAILABILITY_STATUS,
    scopedSlots: {
      customRender: 'availabilityAction'
    }
  },
  {
    name: 'Min. Order Qty',
    width: 120,
    key: TABLE_COLUMN_KEYS.MINIMUM_ORDER_QUANTITY
  },
  {
    name: 'SKU',
    width: 120,
    key: TABLE_COLUMN_KEYS.SKU
  },
  {
    name: 'Barcode',
    width: 160,
    key: TABLE_COLUMN_KEYS.BARCODE
  },
  {
    name: 'Size (W×H×D)',
    width: 180,
    key: TABLE_COLUMN_KEYS.DIMENSIONS
  },
  {
    name: 'Weight (g)',
    width: 100,
    key: TABLE_COLUMN_KEYS.WEIGHT
  },
  {
    name: 'Avg. Rating',
    width: 100,
    key: TABLE_COLUMN_KEYS.RATING,
    scopedSlots: {
      customRender: 'ratingAction'
    }
  },
  {
    name: 'Warranty',
    width: 150,
    key: TABLE_COLUMN_KEYS.WARRANTY_INFORMATION
  },
  {
    name: 'Shipping Info',
    width: 150,
    key: TABLE_COLUMN_KEYS.SHIPPING_INFORMATION
  },
  {
    name: 'Return Policy',
    width: 150,
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
