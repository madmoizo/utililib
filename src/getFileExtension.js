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
    return file.substring('data:image/'.length, file.indexOf(';base64'))
  }

  return null
}
