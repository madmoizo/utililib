/**
 * Add dashes to a string with UUID format
 * @param {string} string
 * @returns {string}
 */
export default function redashUUID (string) {
  return string.replace(/([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})/, '$1-$2-$3-$4-$5')
}
