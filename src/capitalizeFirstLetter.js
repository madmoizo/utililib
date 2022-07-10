/**
 * Capitalize the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export default function capitalizeFirstLetter (str) {
  if (str.length <= 1) {
    return str.charAt(0).toUpperCase()
  } else {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  }
}
