/**
 * Transform a string representation of a date into a javascript Date
 * @param {object} options
 * @param {object} source
 * @param {object} target
 * @param {object} exceptions
 * @return {void}
 */
export default function mergeObject ({ source, target, exceptions = {} }) {
  for (const [key, value] of Object.entries(source)) {
    if (exceptions[key]) {
      exceptions[key](value)
    } else {
      target[key] = value
    }
  }
}
    