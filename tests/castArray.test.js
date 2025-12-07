/**
 * @fileoverview Unit tests for the `castArray` function.
 * The `castArray` function ensures that a given value is wrapped in an array.
 * - If the value is already an array, it returns the same array.
 * - If no value is provided, it returns an empty array.
 */

import castArray from '../src/castArray.js';

describe('castArray', () => {

  /**
   * @test
   * @description Should return the same array if input is already an array.
   */
  test('should return array as is', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).toBe(arr);
  });

  /**
   * @test
   * @description Should wrap non-array values in a new array.
   */
  test('should wrap non-array value in array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
  });

  /**
   * @test
   * @description Should handle null and undefined by wrapping them in an array.
   */
  test('should handle null and undefined', () => {
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  /**
   * @test
   * @description Should return an empty array when called with no arguments.
   */
  test('should return empty array when no arguments', () => {
    expect(castArray()).toEqual([]);
  });

  /**
   * @test
   * @description Should handle boolean values by wrapping them in an array.
   */
  test('should handle boolean values', () => {
    expect(castArray(true)).toEqual([true]);
    expect(castArray(false)).toEqual([false]);
  });

  /**
   * @test
   * @description Should handle functions by wrapping them in an array.
   */
  test('should handle functions', () => {
    const fn = () => {};
    expect(castArray(fn)).toEqual([fn]);
  });

});
