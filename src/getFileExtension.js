/**
 * Retrieve the file extension from an URL or a base64 string
 * @param {string} src
 * @return {string}
 */
export default function getFileExtension (src) {
  if (isUrl(src)) {
    return src.split(/[#?]/)[0].split('.').pop().trim()
  }
  if (isBase64(src)) {
    return src.substring('data:image/'.length, src.indexOf(';base64'))
  }

  return ''
}
