/**
 * @fileoverview Unit tests for the `reduce` function.
 * The `reduce` function iterates over elements of a collection (array or object),
 * applying an iteratee function to each element to reduce it to a single accumulated value.
 * Handles empty collections, null/undefined input, and optional initial values.
 */

import reduce from '../src/reduce.js';

describe('reduce', () => {

  /**
   * @test
   * @description Should reduce an array to a single accumulated value with an initial accumulator.
   */
  test('should reduce array to single value', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
    expect(reduce([1, 2, 3, 4], (sum, n) => sum + n, 0)).toBe(10);
  });

  /**
   * @test
   * @description Should work correctly without providing an initial value.
   */
  test('should work without initial value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
  });

  /**
   * @test
   * @description Should return the initial value for an empty array.
   */
  test('should handle empty array with accumulator', () => {
    expect(reduce([], (sum, n) => sum + n, 10)).toBe(10);
  });

  /**
   * @test
   * @description Should return initial value for null or undefined collection.
   */
  test('should handle null or undefined', () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0);
  });

});
