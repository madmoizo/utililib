/**
 * Convert an image to base64 string
 * @param {string} base64 - URL or base64
 * @return {HTMLImageElement}
 */
export default function base64ToImageElement (base64) {
  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous' // Avoid CORS error
    image.src = base64
    image.onload = () => {
      resolve(image)
    }
  })
}
