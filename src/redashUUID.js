/**
 * Add dashes to a string with UUID format
 * @param {string} value
 * @returns {string}
 */
export default function redashUUID (str) {
  return str.replace(/([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})/, '$1-$2-$3-$4-$5')
}
