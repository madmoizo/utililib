/**
 * @param {string} value
 * @return {boolean}
 */
export default function isBase64 (value) {
  return /^data:.+;base64,/.test(value)
}
