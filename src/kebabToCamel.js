import capitalizeFirstLetter from './capitalizeFirstLetter.js'


/**
 * Transform kebab-case string to CamelCase
 * @param {string} string
 * @returns {string}
 */
export default function kebabToCamel (string) {
  return string
    .split('-')
    .reduce((accu, current) => `${accu}${capitalizeFirstLetter(current)}`, '')
}
