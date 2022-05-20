import isUrl from './isUrl.js'
import isBase64 from './isBase64.js'


/**
 * Check if a value is a URL or a base64 string
 * @param {string} value
 * @return {boolean}
 */
export default function isFile (value) {
  return isUrl(value) || isBase64(value)
}
