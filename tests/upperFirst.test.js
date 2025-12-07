/**
 * @fileoverview Unit tests for the `upperFirst` function.
 * The `upperFirst` function converts the first character of a string to uppercase.
 * It preserves the remaining characters as-is.
 * Handles empty strings, single characters, null, and undefined inputs.
 */

import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {

  /**
   * @test
   * @description Should uppercase the first character of a string.
   */
  test('should uppercase first character', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  /**
   * @test
   * @description Should handle a single character string.
   */
  test('should handle single character', () => {
    expect(upperFirst('f')).toBe('F');
  });

  /**
   * @test
   * @description Should return empty string for empty input.
   */
  test('should handle empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  /**
   * @test
   * @description Should not modify the rest of the string.
   */
  test('should not change rest of string', () => {
    expect(upperFirst('hello world')).toBe('Hello world');
  });

  /**
   * @test
   * @description Should handle null or undefined inputs by returning empty string.
   */
  test('should handle null or undefined', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
  });

});
