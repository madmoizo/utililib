/**
 * Return a string until the beginning of the last occurence of the search value
 * @param {string} value
 * @param {string} search
 * @returns {string}
 */
export default function substringUntil (value, search) {
  return value.substring(0, value.lastIndexOf(search)) // (0, -1) return ''
}
