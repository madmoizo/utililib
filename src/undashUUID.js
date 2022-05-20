/**
 * Remove dashes from a string
 * @param {string} value
 * @returns {string}
 */
export default function undashUUID (str) {
  return str.replace(/-/g, '')
}