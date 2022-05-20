/**
 * Check if a value is falsy
 * @param {any} value
 * @returns {boolean}
 */
export default function isFalsy (value) {
  return [undefined, null, '', 0].includes(value)
}