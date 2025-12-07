import upperFirst from './upperFirst.js'
import toString from './toString.js'

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'FRED'
 */
const capitalize = (string) => {
  const str = toString(string)
  return str ? upperFirst(str) : ''
}

export default capitalize
