import isUrl from './isUrl.js'
import isBase64 from './isBase64.js'
import parseBase64 from './parseBase64.js'


/**
 * Retrieve the file extension from an URL or a base64 string
 * @param {string} file
 * @return {string | null}
 */
export default function getFileExtension (file) {
  if (isUrl(file)) {
    return file.split(/[#?]/)[0].split('.').pop().trim()
  }
  if (isBase64(file)) {
    return (parseBase64(file)).extension
  }

  return null
}
