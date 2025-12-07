import isLength from './isLength.js'

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * Arrays, strings, and `arguments` objects are considered array-like.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(function(){ return arguments; }())
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike(value) {
  return value != null &&
         typeof value !== 'function' &&
         isLength(value.length) &&
         (Array.isArray(value) ||
          typeof value === 'string' ||
          (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Arguments]'))
}

export default isArrayLike
