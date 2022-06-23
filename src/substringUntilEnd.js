/**
 * Return a string until the end of the last occurence of the search value
 * @param {string} value
 * @param {string} search
 * @returns {string}
 */
export default function substringUntilEnd (value, search) {
  let lastIndexOf = value.lastIndexOf(search)
  if (lastIndexOf !== -1) {
    lastIndexOf += search.length
  }
  return value.substring(0, lastIndexOf)
}
