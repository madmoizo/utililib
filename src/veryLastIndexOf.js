/**
 * Find the last index of the end of a string
 * @param {string} value
 * @param {string} searchString
 * @returns {number}
 */
export default function veryLastIndexOf (value, searchString) {
  return value.lastIndexOf(searchString) + searchString.length
}
