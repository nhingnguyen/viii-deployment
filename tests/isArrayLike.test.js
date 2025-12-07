/**
 * @fileoverview Unit tests for the `isArrayLike` function.
 * The `isArrayLike` function checks if a value is array-like.
 * Array-like values have a length property and are not functions.
 * This includes arrays, strings, and arguments objects.
 * Non-array-like values include objects without a numeric length, numbers, null, undefined, and functions.
 */

import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike', () => {

  /**
   * @test
   * @description Should return true for arrays.
   */
  test('should return true for arrays', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  /**
   * @test
   * @description Should return true for strings.
   */
  test('should return true for strings', () => {
    expect(isArrayLike('abc')).toBe(true);
    expect(isArrayLike('')).toBe(true);
  });

  /**
   * @test
   * @description Should return true for the arguments object.
   */
  test('should return true for arguments object', () => {
    const args = (function() { return arguments; }(1, 2, 3));
    expect(isArrayLike(args)).toBe(true);
  });

  /**
   * @test
   * @description Should return false for non-array-like objects and invalid types.
   */
  test('should return false for non array-like objects', () => {
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike({ length: 0 })).toBe(false);
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(123)).toBe(false);
  });

});
