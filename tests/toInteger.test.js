/**
 * @fileoverview Unit tests for the `toInteger` function.
 * The `toInteger` function converts a given value to an integer.
 * It handles numbers, numeric strings, and edge cases like NaN, null, undefined, or empty string.
 * Rounds positive numbers down and negative numbers up toward zero.
 */

import toInteger from '../src/toInteger.js';

describe('toInteger', () => {

  /**
   * @test
   * @description Should convert floating point numbers to integers.
   */
  test('should convert numbers to integers', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(3.9)).toBe(3);
    expect(toInteger(-3.2)).toBe(-4);
  });

  /**
   * @test
   * @description Should convert numeric strings to integers.
   */
  test('should handle strings', () => {
    expect(toInteger('3')).toBe(3);
    expect(toInteger('3.2')).toBe(3);
    expect(toInteger('-3.2')).toBe(-4);
  });

  /**
   * @test
   * @description Should handle edge cases like NaN, null, undefined, and empty string by returning 0.
   */
  test('should handle edge cases', () => {
    expect(toInteger(NaN)).toBe(0);
    expect(toInteger(null)).toBe(0);
    expect(toInteger(undefined)).toBe(0);
    expect(toInteger('')).toBe(0);
  });

  /**
   * @test
   * @description Should handle large numbers without losing precision.
   */
  test('should handle large numbers', () => {
    expect(toInteger(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
  });

});
