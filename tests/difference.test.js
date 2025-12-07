/**
 * @fileoverview Unit tests for the `difference` function.
 * The `difference` function creates an array of values from the first array 
 * that are not present in the other arrays.
 * It handles empty arrays, duplicate values, and normal array differences.
 */

import difference from '../src/difference.js';

describe('difference', () => {

  /**
   * @test
   * @description Should return values from the first array that are not in the second array.
   */
  test('should return difference between arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([1, 2, 3], [4, 2])).toEqual([1, 3]);
  });

  /**
   * @test
   * @description Should handle empty arrays correctly.
   */
  test('should handle empty arrays', () => {
    expect(difference([], [1, 2])).toEqual([]);
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });

  /**
   * @test
   * @description Should remove duplicates from the result array.
   */
  test('should handle duplicate values', () => {
    expect(difference([1, 1, 2], [1, 3])).toEqual([2]);
  });

});
