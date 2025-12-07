/**
 * @fileoverview Unit tests for the `compact` function.
 * The `compact` function removes all falsy values from an array.
 * Falsy values include: false, null, 0, "", undefined, and NaN.
 * Truthy values are preserved.
 */

import compact from '../src/compact.js';

describe('compact', () => {

  /**
   * @test
   * @description Should remove all falsy values from an array.
   */
  test('should remove falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3, null, 4, NaN, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  /**
   * @test
   * @description Should handle empty array by returning an empty array.
   */
  test('should handle empty array', () => {
    expect(compact([])).toEqual([]);
  });

  /**
   * @test
   * @description Should return an empty array if the input contains only falsy values.
   */
  test('should handle array with only falsy values', () => {
    expect(compact([0, false, '', null, NaN, undefined])).toEqual([]);
  });

  /**
   * @test
   * @description Should preserve all truthy values in the array.
   */
  test('should preserve truthy values', () => {
    expect(compact([true, 'hello', [], {}])).toEqual([true, 'hello', [], {}]);
  });

});
