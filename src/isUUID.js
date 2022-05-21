/**
 * Check if a string matchs the UUID format
 * @param {string} value
 * @returns {boolean}
 */
export default function isUUID (value) {
  return /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/.test(value)
}