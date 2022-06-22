import has from './has.js'


/**
 * Get a value from an object, create the tree if necessary
 * @param {object} object
 * @param {Array<string>} tree
 * @param {any} [value]
 * @returns {any}
 */
export default function getDeepValue (object, tree, value = {}) {
  return tree.reduce((accu, branch, index) => {
    if (!has(accu, branch)) {
      accu[branch] = index === tree.length - 1
        ? value
        : {}
    }

    return accu[branch]
  }, object)
}
