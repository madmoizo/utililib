/**
 * @param {string} value
 * @return {boolean}
 */
export default function isBase64 (value) {
  return value.includes('data:') && value.includes(';base64')
}