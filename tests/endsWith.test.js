/**
 * @fileoverview Unit tests for the `endsWith` function.
 * The `endsWith` function checks if a string ends with a given target string.
 * It handles optional position, empty strings, case sensitivity, and null/undefined input.
 */

import endsWith from '../src/endsWith.js';

describe('endsWith', () => {

  /**
   * @test
   * @description Should check if the string ends with the specified target.
   */
  test('should check if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'bc')).toBe(true);
  });

  /**
   * @test
   * @description Should respect the optional position parameter.
   */
  test('should handle position parameter', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('abc', 'a', 1)).toBe(true);
  });

  /**
   * @test
   * @description Should handle empty strings correctly.
   */
  test('should handle empty strings', () => {
    expect(endsWith('', '')).toBe(true);
    expect(endsWith('abc', '')).toBe(true);
  });

  /**
   * @test
   * @description Should return false if target string is longer than input string.
   */
  test('should handle target longer than string', () => {
    expect(endsWith('abc', 'abcd')).toBe(false);
  });

  /**
   * @test
   * @description Should be case-sensitive.
   */
  test('should be case-sensitive', () => {
    expect(endsWith('abc', 'C')).toBe(false);
  });

  /**
   * @test
   * @description Should return false if input string is null or undefined.
   */
  test('should handle null or undefined', () => {
    expect(endsWith(null, 'a')).toBe(false);
    expect(endsWith(undefined, 'a')).toBe(false);
  });

});
