/**
 * Find the index of the end of the last occurence of the value
 * @param {string} value
 * @param {string} search
 * @returns {number}
 */
export default function veryLastIndexOf (value, search) {
  let lastIndexOf = value.lastIndexOf(search)
  if (lastIndexOf !== -1) {
    lastIndexOf += search.length
  }
  return lastIndexOf
}
