/**
 * Wrapper for object prototype hasOwnProperty method
 * because hasOwnProperty may be shadowed by properties on the object
 * @param {any} value
 * @param {string} key - key to find in the value
 * @returns {boolean}
 */
export default function has (value, key) {
  try { // nullish value throw an error
    return Object.prototype.hasOwnProperty.call(value, key)
  } catch {
    return false
  }
}
