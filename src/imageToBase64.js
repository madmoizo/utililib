/**
 * Convert an image to base64 string
 * @param {string} src - URL or base64
 * @param {object} options
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {number} [options.cropWidth]
 * @param {number} [options.cropHeight]
 * @param {number} [options.quality]
 * @return {string} - base64 
 */
export default function imageToBase64 (src, { width, height, cropWidth, cropHeight, quality }) {
  if (!src) {
    throw new Error('imageToBase64 requires `src` property')
  }

  width = Number(width) || 0
  height = Number(height) || 0
  cropHeight = Number(cropHeight) || 0
  cropWidth = Number(cropWidth) || 0
  quality = Number(quality) || 0.8

  const mime = src.includes('data:image/')
    ? src.substring('data:image/'.length, src.indexOf(';base64'))
    : 'jpeg'

  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'Anonymous' // Avoid CORS error
    image.src = src
    image.onload = () => {
      // Set image size
      let w = width || image.width
      let h = height || image.height

      if (width && !height) {
        h = Math.round(h * (w / image.width))
      }
      if (!width && height) {
        w = Math.round(w * (h / image.height))
      }
      // Create canvas
      const canvas = document.createElement('canvas')
      canvas.width = w - cropWidth
      canvas.height = h - cropHeight
      // Draw the original image into the canvas
      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(image, 0, 0, w, h)
      // Resolve the base64
      const base64 = canvas.toDataURL(`image/${mime}`, quality)
      resolve(base64)
    }
  })
}