/**
 * @fileoverview Unit tests for the `filter` function.
 * The `filter` function iterates over elements of a collection, returning an array of all elements
 * that pass the predicate check. It handles arrays, empty arrays, null/undefined collections,
 * and different predicate scenarios.
 */

import filter from '../src/filter.js';

describe('filter', () => {

  /**
   * @test
   * @description Should filter array elements based on a predicate function.
   */
  test('should filter array based on predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  /**
   * @test
   * @description Should return an empty array when no elements match the predicate.
   */
  test('should return empty array when no elements match', () => {
    expect(filter([1, 2, 3], n => n > 5)).toEqual([]);
  });

  /**
   * @test
   * @description Should return all elements when all satisfy the predicate.
   */
  test('should return all elements when all match', () => {
    const arr = [1, 2, 3];
    expect(filter(arr, n => n > 0)).toEqual(arr);
  });

  /**
   * @test
   * @description Should handle empty input arrays by returning an empty array.
   */
  test('should handle empty array', () => {
    expect(filter([], Boolean)).toEqual([]);
  });

  /**
   * @test
   * @description Should handle null or undefined collections by returning an empty array.
   */
  test('should handle null or undefined', () => {
    expect(filter(null, Boolean)).toEqual([]);
    expect(filter(undefined, Boolean)).toEqual([]);
  });

});
