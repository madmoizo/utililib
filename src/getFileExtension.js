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
    return file.match(/^data:.+\/(.+);base64,/)[1]
  }

  return null
}
