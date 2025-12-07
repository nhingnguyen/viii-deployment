/**
 * @fileoverview Unit tests for the `countBy` function.
 * The `countBy` function iterates over a collection and returns an object
 * composed of keys generated from the results of running each element through
 * an iteratee. The corresponding value of each key is the number of times it occurs.
 */

import countBy from '../src/countBy.js';

describe('countBy', () => {

  /**
   * @test
   * @description Should count elements by boolean iteratee.
   */
  test('should count by boolean iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  /**
   * @test
   * @description Should count elements by string length.
   */
  test('should count string lengths', () => {
    const words = ['one', 'two', 'three'];
    expect(countBy(words, value => value.length)).toEqual({ '3': 2, '5': 1 });
  });

  /**
   * @test
   * @description Should return an empty object for empty collection.
   */
  test('should handle empty collection', () => {
    expect(countBy([], value => value)).toEqual({});
  });

  /**
   * @test
   * @description Should handle null or undefined collection by returning empty object.
   */
  test('should handle null or undefined collection', () => {
    expect(countBy(null, value => value)).toEqual({});
    expect(countBy(undefined, value => value)).toEqual({});
  });

  /**
   * @test
   * @description Should handle numeric values with function iteratee.
   */
  test('should handle numeric values', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
  });

});
