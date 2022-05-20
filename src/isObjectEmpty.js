import isObject from './isObject.js'


/**
 * Check if an objet is empty
 * @param {object} value
 * @return {boolean}
 */
export default function isObjectEmpty (obj) {
  if (!isObject(obj)) {
    throw new Error(`Not an object`)
  }
  return Object.keys(obj).length === 0
}
  