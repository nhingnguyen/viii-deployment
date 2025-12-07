/**
 * @fileoverview Unit tests for the `chunk` function.
 * The `chunk` function splits an array into groups of specified size.
 * It handles empty arrays, null/undefined input, zero or negative sizes, and arrays smaller than the chunk size.
 */

import chunk from '../src/chunk.js';

describe('chunk', () => {

  /**
   * @test
   * @description Should split array into chunks of the specified size.
   */
  test('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  /**
   * @test
   * @description Should handle chunk size of 1.
   */
  test('should handle chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  /**
   * @test
   * @description Should handle chunk size larger than the array length.
   */
  test('should handle chunk size larger than array', () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  /**
   * @test
   * @description Should return an empty array for empty input.
   */
  test('should return empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  /**
   * @test
   * @description Should return empty array for zero or negative chunk size.
   */
  test('should handle chunk size of 0 or negative', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  /**
   * @test
   * @description Should return empty array if input array is null or undefined.
   */
  test('should handle null or undefined array', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

});
