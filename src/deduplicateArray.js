import isObject from './isObject.js'


/**
 * Deduplicate an array of objects
 * @param {Array<any>} array
 * @param {Array<string>} [uniqueKeys=[]]
 * @return {Array<any>}
 */
export default function deduplicateArray (array, uniqueKeys = []) {
  return array.filter((value, index) => {
    // findIndex will always return the first index matching the condition
    return index === array.findIndex(compare => {
      if (isObject(value)) {
        if (isObject(compare)) {
          const keys = uniqueKeys.length
            ? uniqueKeys
            : Object.keys(value)

          return keys.every(key => value[key] === compare[key])
        } else {
          return false
        }
      } else {
        return value === compare
      }
    })
  })
}
