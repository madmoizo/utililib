import veryLastIndexOf from './veryLastIndexOf.js'


/**
 * Return a string until the end of the last occurence of the search value
 * @param {string} value
 * @param {string} search
 * @returns {string}
 */
export default function substringUntilEnd (value, search) {
  return value.substring(0, veryLastIndexOf(search))
}
