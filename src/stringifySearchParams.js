import isDate from './isDate.js'


/**
 * Transform a dictionary into a stringified url searchParams
 * @param {object} searchParams
 * @returns {string}
 */
export default function stringifySearchParams (searchParams) {
  let requestUrl = ''

  if (searchParams) {
    requestUrl = Object.entries(searchParams)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => {
        if (isDate(value)) {
          value = value.toISOString()
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      })
      .join('&')
  }
  // Add leading '?'
  if (requestUrl) {
    requestUrl = `?${requestUrl}`
  }

  return requestUrl
}
