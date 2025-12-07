/**
 * @fileoverview Unit tests for the `drop` function.
 * The `drop` function creates a slice of an array with `n` elements dropped from the beginning.
 * It handles default `n`, zero or negative `n`, empty arrays, and null/undefined inputs.
 */

import drop from '../src/drop.js';

describe('drop', () => {

  /**
   * @test
   * @description Should drop the specified number of elements from the start of the array.
   */
  test('should drop specified number of elements', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  /**
   * @test
   * @description Should return the same array if n = 0.
   */
  test('should handle n = 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  /**
   * @test
   * @description Should treat negative n as 0 and return the original array.
   */
  test('should handle negative n', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });

  /**
   * @test
   * @description Should return empty array if input array is empty.
   */
  test('should handle empty array', () => {
    expect(drop([], 1)).toEqual([]);
  });

  /**
   * @test
   * @description Should return empty array if input is null or undefined.
   */
  test('should handle null or undefined', () => {
    expect(drop(null, 1)).toEqual([]);
    expect(drop(undefined, 1)).toEqual([]);
  });

});
