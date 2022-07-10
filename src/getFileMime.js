import isUrl from './isUrl.js'
import isBase64 from './isBase64.js'
import parseBase64 from './parseBase64.js'


const mimeSearch = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  bmp: 'image/bmp',
  zip: 'application/zip',
  xml: 'application/xml',
  pdf: 'application/pdf',
  mpeg: 'video/mpeg',
  csv: 'text/csv'
}

/**
 * Retrieve the file extension from an URL or a base64 string
 * @param {string} file
 * @return {string | null}
 */
export default function getFileMime (file) {
  if (isUrl(file)) {
    const extension = file.split(/[#?]/)[0].split('.').pop().trim()
    return mimeSearch[extension] ?? null
  }
  if (isBase64(file)) {
    return (parseBase64(file)).mime
  }

  return null
}
