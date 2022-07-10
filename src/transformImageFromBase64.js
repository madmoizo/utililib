import parseBase64 from './parseBase64.js'
import transformImage from './transformImage.js'


/**
 * Convert an image to base64 string
 * @param {string} base64 - URL or base64
 * @param {object} options
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {number} [options.cropWidth]
 * @param {number} [options.cropHeight]
 * @param {number} [options.quality]
 * @return {Promise<string>} - base64
 */
export default function transformImageFromBase64 (base64, options) {
  const { mime } = parseBase64(base64)
  return transformImage(base64, { mime, ...options })
}
