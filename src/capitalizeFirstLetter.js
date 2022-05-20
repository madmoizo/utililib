/**
 * Capitalize the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export default function capitalizeFirstLetter (str) {
  switch (str.length) {
    case 0:
      return ''
    case 1:
      return str.charAt(0).toUpperCase()
    default:
      return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  }
}