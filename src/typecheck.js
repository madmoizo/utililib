import isString from './isString.js'
import isFunction from './isFunction.js'
import isArray from './isArray.js'
import isObject from './isObject.js'
import isBoolean from './isBoolean.js'
import isTrue from './isTrue.js'
import isFalse from './isFalse.js'
import isNull from './isNull.js'


const TYPES = {
  array: isArray,
  function: isFunction,
  object: isObject,
  string: isString,
  boolean: isBoolean,
  null: isNull,
  false: isFalse,
  true: isTrue
}


/**
 * Check the existence and type validity of a user input
 * @param {object} options
 * @param {string} options.name
 * @param {any} options.value
 * @param {string|Array<string>} options.type
 * @param {boolean} [options.required]
 */
function typecheckItem ({ name, value, type, required }) {
  if (value === undefined) {
    if (required) {
      throw new Error(`\`${name}\` is a required param but is missing`)
    }
  } else {
    if (isString(type)) {
      if (!TYPES[type](value)) {
        throw new Error(`\`${name}\` value \`${value}\` does not match the \`${type}\` type`)
      }
    } else if (isArray(type)) {
      if (
        type.length === 2 &&
        type[0] === 'object' &&
        isObject(type[1])
      ) {
        typecheckItem({
          name,
          value,
          type: type[0],
          required
        })

        for (const key of Object.keys(value)) {
          if (!has(type[1], key)) {
            throw new Error(`\`${name}\` params does not accept \`${key}\` property`)
          }
        }

        for (const [propname, propconf] of Object.entries(type[1])) {
          typecheckItem({
            name: `${name}.${propname}`,
            value: value[propname],
            type: propconf.type,
            required: propconf.required
          })
        }
      } else {
        let isValid = false
        let error = null

        for (const someType of type) {
          try {
            typecheckItem({
              name,
              value,
              type: someType,
              required
            })
            isValid = true
            break
          } catch (e) {
            error = e
          }
        }

        if (!isValid) {
          throw error
        }
      }
    }
  }
}


/**
 * Check the existence and type validity of a user input
 * @param {object} options
 * @param {object} options.params
 * @param {Error} [options.error]
 */
export default function typecheck ({ params, error }) {
  error ??= Error

  try {
    for (const [paramName, paramOptions] of Object.entries(params)) {
      typecheckItem({ name: paramName, ...paramOptions })
    }
  } catch (err) {
    throw new error(err.message)
  }
}
