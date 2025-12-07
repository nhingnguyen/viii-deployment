/**
 * @fileoverview Unit tests for the `isEmpty` function.
 * The `isEmpty` function checks if a value is empty.
 * It returns true for:
 *   - empty arrays
 *   - empty objects
 *   - empty strings
 *   - null or undefined
 * It returns false for all non-empty values including numbers, booleans, and non-empty arrays/objects/strings.
 */

import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {

  /**
   * @test
   * @description Should return true for empty arrays.
   */
  test('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  /**
   * @test
   * @description Should return true for empty objects.
   */
  test('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  /**
   * @test
   * @description Should return true for empty strings.
   */
  test('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  /**
   * @test
   * @description Should return true for null or undefined values.
   */
  test('should return true for null/undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  /**
   * @test
   * @description Should return false for non-empty arrays, objects, strings, numbers, and booleans.
   */
  test('should return false for non-empty values', () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });

});
