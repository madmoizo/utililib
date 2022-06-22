/**
 * Generate a digicode
 * @param {number} length
 * @return {string}
 */
export default function generateDigicode (length) {
  return Array(length).fill(0).map(() => Math.floor(Math.random() * 10)).join('')
}
