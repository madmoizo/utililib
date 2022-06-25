/**
 * Unaccent a string
 * @param {string} value
 * @returns {string}
 */
export default function unaccent (value) {
  // https://stackoverflow.com/a/37511463/4906701
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}
