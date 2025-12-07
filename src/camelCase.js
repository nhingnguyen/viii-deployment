import upperFirst from './upperFirst.js'
import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string` to camel case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
const camelCase = (string) => {
  if (string == null) return '' // handle null/undefined
  const str = toString(string).replace(/[^a-zA-Z0-9]+/g, ' ') // replace non-alphanumeric with space
  return words(str).reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? upperFirst(word) : word)
  }, '')
}

export default camelCase
