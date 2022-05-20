/**
 * Check if a value is a finite number
 * @param {any} value
 * @return {boolean}
 */
export default function isNumber (value) {
  return Number(value) === value && Number.isFinite(value)
}
  