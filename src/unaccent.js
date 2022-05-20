/**
 * Unaccent a string
 * @param {string} string
 * @returns {string}
 */
export default function unaccent (string) {
  // https://stackoverflow.com/a/37511463/4906701
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}