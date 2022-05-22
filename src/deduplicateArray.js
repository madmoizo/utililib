/**
 * Deduplicate an array of objects
 * @param {Array<object>} array
 * @param {Array<string>} [uniqueKeys=[]]
 * @return {Array<object>}
 */
export default function deduplicateArray (array, uniqueKeys = []) {
  return array
    .filter((value, index) => {
      return index === array.findIndex(item => {
        for (const key of uniqueKeys) {
          if (item[key] !== value[key]) {
            return false
          }
        }
        return true
    })
  })
}
  