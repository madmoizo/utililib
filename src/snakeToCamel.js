import capitalizeFirstLetter from './capitalizeFirstLetter.js'


/**
 * Transform snake_case string to CamelCase
 * @param {string} string
 * @returns {string}
 */
export default function snakeToCamel (string) {
  return string
    .split('_')
    .reduce((accu, current) => `${accu}${capitalizeFirstLetter(current)}`, '')
}
