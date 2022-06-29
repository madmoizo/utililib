import isUrl from './isUrl.js'
import isBase64 from './isBase64.js'
import getBase64Extension from './getBase64Extension.js'


/**
 * Retrieve the file extension from an URL or a base64 string
 * @param {string} file
 * @return {string | null}
 */
export default function getFileExtension (file) {
  if (isUrl(file)) {
    return src.split(/[#?]/)[0].split('.').pop().trim()
  }
  if (isBase64(file)) {
    return getBase64Extension(file)
  }

  return null
}
