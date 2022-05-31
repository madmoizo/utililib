/**
 * Remove dashes from a string
 * @param {string} value
 * @returns {string}
 */
export default function undashUUID (value) {
  return value.replace(/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/, '$1$2$3$4$5')
}
