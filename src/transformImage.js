/**
 * Convert an image to base64 string
 * @param {string} src - URL or base64
 * @param {object} options
 * @param {number} options.mime
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {number} [options.cropWidth]
 * @param {number} [options.cropHeight]
 * @param {number} [options.quality]
 * @return {Promise<string>} - base64
 */
export default function transformImage (src, { mime, width, height, cropWidth, cropHeight, quality }) {
  // Cast options to number
  width = parseInt(width) || 0
  height = parseInt(height) || 0
  cropHeight = parseInt(cropHeight) || 0
  cropWidth = parseInt(cropWidth) || 0
  quality = parseFloat(quality) || 0.8

  if (!mime) {
    throw new Error('The `mime` options is required')
  }

  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous' // Avoid CORS error
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
      const base64 = canvas.toDataURL(mime, quality)
      resolve(base64)
    }
  })
}
