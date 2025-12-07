/**
 * Checks if `string` ends with the given target string.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target=''] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @see includes, startsWith
 * @example
 *
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 */
function endsWith(string, target, position) {
  string = string == null ? '' : String(string)
  target = target == null ? '' : String(target)

  const length = string.length
  position = position === undefined ? length : +position

  if (position < 0 || Number.isNaN(position)) {
    position = 0
  } else if (position > length) {
    position = length
  }

  const end = position
  const start = end - target.length

  return start >= 0 && string.slice(start, end) === target
}

export default endsWith
