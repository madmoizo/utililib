import isNullish from './isNullish.js'


/**
 * Wrapper for object prototype hasOwnProperty method
 * because hasOwnProperty may be shadowed by properties on the object
 * @param {any} value
 * @param {string} key - key to find in the object
 * @returns {boolean}
 */
export default function has (value, key) {
  return isNullish(value)
    ? false
    : Object.prototype.hasOwnProperty.call(value, key)
}
  