import {
  DEFAULT_VALUES,
  AVAILABILITY_STATUS,
  RATING_MESSAGES
} from '@/constants/content'

export const getColStyle = (field) => {
  const width = field.width
  if (width) return `width: ${width}px; min-width: ${width}px;`
  return undefined
}

export const handleImageError = (event) => {
  event.target.style.display = 'none'
}

export const truncateText = (text, maxLength = DEFAULT_VALUES.DESCRIPTION_MAX_LENGTH) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + DEFAULT_VALUES.TRUNCATE_SUFFIX
}

export const formatPrice = (price) => {
  if (price === null || price === undefined) return ''
  return `${DEFAULT_VALUES.CURRENCY_SYMBOL}${price.toFixed(DEFAULT_VALUES.PRICE_DECIMAL_PLACES)}`
}

export const formatDiscount = (discount) => {
  if (discount === null || discount === undefined) return ''
  return `${discount.toFixed(1)}${DEFAULT_VALUES.PERCENTAGE_SYMBOL}`
}

export const formatAvailability = (status) => {
  if (!status) return AVAILABILITY_STATUS.UNKNOWN
  const isInStock = status === AVAILABILITY_STATUS.IN_STOCK
  return isInStock ? AVAILABILITY_STATUS.IN_STOCK : AVAILABILITY_STATUS.OUT_OF_STOCK
}

export const getAvailabilityClass = (status) => {
  if (!status) return 'unknown'
  return status === AVAILABILITY_STATUS.IN_STOCK ? 'available' : 'unavailable'
}

export const formatDimensions = (dimensions) => {
  if (!dimensions || !dimensions.width || !dimensions.height || !dimensions.depth) {
    return ''
  }
  return `${dimensions.width}${DEFAULT_VALUES.DIMENSION_SEPARATOR}${dimensions.height}${DEFAULT_VALUES.DIMENSION_SEPARATOR}${dimensions.depth}`
}

export const formatWeight = (weight) => {
  if (weight === null || weight === undefined) return ''
  return `${weight}${DEFAULT_VALUES.WEIGHT_UNIT}`
}

export const getNestedValue = (obj, path) => {
  if (!obj || !path) return ''
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : ''
  }, obj)
}

export const getRatingComment = (item) => {
  if (!item || !item.reviews || !item.reviews.length) return RATING_MESSAGES.NO_REVIEWS

  const firstReview = item.reviews[0]
  if (firstReview && firstReview.comment) {
    return firstReview.comment
  }

  return RATING_MESSAGES.NO_COMMENT
}

export const capitalizeFirstLetter = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
