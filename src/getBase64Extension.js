/**
 * Retrieve the file extension from an URL or a base64 string
 * @param {string} base64
 * @return {string}
 */
export default function getBase64Extension (base64) {
  const extension = base64.match(/^data:.+\/(.+);base64,/)[1]
  if (extension === 'jpeg') {
    return 'jpg'
  }
  return extension
}
