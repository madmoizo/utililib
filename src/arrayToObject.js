/**
 * Convert an array of objects to an Object
 * @param {Array<object>} array
 * @param {string} key
 * @return {Object} hastable using key's value as identifier for each object of the array
 */
export default function arrayToObject (array, key) {
  const obj = {}
  for (const item of array) {
    obj[item[key]] = item
  }
  return obj
}
