import isNumber from './isNumber.js'


/**
 * Check if a value is an integer
 * @param {any} value
 * @return {boolean}
 */
export default function isInteger (value) {
  return isNumber(value) && Number.isInteger(value)
}
