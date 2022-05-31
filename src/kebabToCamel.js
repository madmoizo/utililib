import capitalizeFirstLetter from './capitalizeFirstLetter.js'


/**
 * Transform kebab-case string to CamelCase
 * @param {string} value
 * @returns {string}
 */
export default function kebabToCamel (value) {
  return value
    .split('-')
    .reduce((accu, current) => `${accu}${capitalizeFirstLetter(current)}`, '')
}
