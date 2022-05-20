/**
 * Check if a value is nullish
 * @param {any} value
 * @return {boolean}
 */
export default function isNullish (value) {
  return value === null || value === undefined
}