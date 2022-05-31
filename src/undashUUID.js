/**
 * Remove dashes from a string
 * @param {string} string
 * @returns {string}
 */
export default function undashUUID (string) {
  return string.replace(/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/, '$1$2$3$4$5')
}
