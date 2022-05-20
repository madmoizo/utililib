import capitalizeFirstLetter from './capitalizeFirstLetter.js'


/**
 * Transform kebab-case string to camelCase
 * @param {string} str
 * @returns {string}
 */
export default function kebabToCamel (str) {
  return str
    .split('-')
    .reduce((accu, current) => `${accu}${capitalizeFirstLetter(current)}`, '')
}