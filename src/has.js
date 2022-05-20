/**
 * Wrapper for object prototype hasOwnProperty method
 * because hasOwnProperty may be shadowed by properties on the object
 * @param {Object} object
 * @param {String} key - key to find in the object
 * @returns {boolean}
 */
export default function has (object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}
  