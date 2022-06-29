/**
 * Extract metadata from a base64
 * @param {string} base64
 * @return {string}
 */
export default function parseBase64 (base64) {
  const [metadata, data] = base64.split(';base64,')
  const mime = metadata.split(':').pop()
  let extension = mime.split('/').pop()
  if (extension === 'jpeg') {
    return 'jpg'
  }

  return {
    mime,
    extension,
    data
  }
}
