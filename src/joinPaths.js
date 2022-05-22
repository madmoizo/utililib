/**
 * Join pathnames
 * @param {...string} paths
 * @return {string}
 */
export default function joinPaths (...paths) {
  return paths
    .filter(path => path)
    .join('/')
    // Remove duplicate slashs
    // https://regex101.com/r/O6PKw4/1
    .replace(/(^https?:\/)|(\/){2,}/g, '$1$2')
}
  