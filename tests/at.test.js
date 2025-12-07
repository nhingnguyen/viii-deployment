/**
 * @fileoverview Unit tests for the `at` function.
 * The `at` function retrieves values from an object or array based on specified paths,
 * supporting both dot notation and bracket notation.
 */

import at from '../src/at.js';

describe('at', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

  /**
   * @test
   * @description Should return values at specified paths.
   * Retrieves multiple values using an array of paths.
   */
  test('should return values at specified paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  /**
   * @test
   * @description Should handle a single path string.
   * When a single path is provided, should return an array with one value.
   */
  test('should handle single path', () => {
    expect(at(object, 'a[0].b.c')).toEqual([3]);
  });

  /**
   * @test
   * @description Should return undefined for non-existent paths.
   * Paths that do not exist in the object return `undefined`.
   */
  test('should return undefined for non-existent paths', () => {
    expect(at(object, ['a[2]', 'x.y.z'])).toEqual([undefined, undefined]);
  });

  /**
   * @test
   * @description Should handle empty paths array.
   * Returns an empty array when no paths are provided.
   */
  test('should handle empty paths array', () => {
    expect(at(object, [])).toEqual([]);
  });

  /**
   * @test
   * @description Should handle null or undefined object.
   * Returns `undefined` for each path if the object is null or undefined.
   */
  test('should handle null or undefined object', () => {
    expect(at(null, ['a'])).toEqual([undefined]);
    expect(at(undefined, ['a'])).toEqual([undefined]);
  });

  /**
   * @test
   * @description Should handle array objects.
   * Can access array elements by numeric indices using paths array.
   */
  test('should handle array objects', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(at(arr, [0, 2, 4])).toEqual([1, 3, 5]);
  });
});
