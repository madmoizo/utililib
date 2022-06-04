import has from './has.js'
import isArray from './isArray.js'
import isBoolean from './isBoolean.js'
import isFalse from './isFalse.js'
import isFunction from './isFunction.js'
import isNull from './isNull.js'
import isNumber from './isNumber.js'
import isObject from './isObject.js'
import isString from './isString.js'
import isTrue from './isTrue.js'


const TYPES = {
  // Bypass
  any: () => true,
  unknown: () => true,
  // Real types
  array: isArray,
  boolean: isBoolean,
  function: isFunction,
  number: isNumber,
  object: isObject,
  string: isString,
  // Value
  null: isNull,
  false: isFalse,
  true: isTrue
}


/**
 * Check the existence and type validity of a user input
 * @param {object} options
 * @param {string} options.name
 * @param {any} options.value
 * @param {string | Array<string>} options.type
 * @param {boolean} [options.required=false]
 */
function typecheckItem ({ name, value, type, required = false }) {
  if (value === undefined) {
    if (required) {
      throw new RangeError(`\`${name}\` is required but missing`)
    }
  } else {
    if (isString(type)) {
      if (!TYPES[type](value)) {
        throw new TypeError(`value of \`${name}\` does not match the required type \`${type}\``)
      }
    } else if (isArray(type)) {
      if (
        type.length === 2 &&
        type[0] === 'object' &&
        isObject(type[1])
      ) {
        typecheckItem({ name, value, required, type: type[0] })

        for (const key of Object.keys(value)) {
          if (!has(type[1], key)) {
            throw new RangeError(`\`${name}\` does not accept \`${key}\` property`)
          }
        }

        for (const [propname, propconf] of Object.entries(type[1])) {
          typecheckItem({
            name: `${name}.${propname}`,
            value: value[propname],
            required: propconf.required,
            type: propconf.type
          })
        }
      } else {
        const isValid = type.some(t => {
          try {
            typecheckItem({ name, value, required, type: t })
            return true
          } catch {
            return false
          }
        })

        if (!isValid) {
          throw new TypeError(`value of \`${name}\` does not match one of the required types \`${type}\``)
        }
      }
    }
  }
}


/**
 * Check the existence and type validity of a user input
 * @param {object} params
 * @returns {void}
 */
export default function typecheck (params) {
  for (const [paramName, paramOptions] of Object.entries(params)) {
    typecheckItem({ name: paramName, ...paramOptions })
  }
}
