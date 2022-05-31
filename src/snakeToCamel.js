import capitalizeFirstLetter from './capitalizeFirstLetter.js'


/**
 * Transform snake_case string to CamelCase
 * @param {string} value
 * @returns {string}
 */
export default function snakeToCamel (value) {
  return value
    .split('_')
    .reduce((accu, current) => `${accu}${capitalizeFirstLetter(current)}`, '')
}
