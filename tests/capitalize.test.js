/**
 * @fileoverview Unit tests for the `capitalize` function.
 * The `capitalize` function converts the first character of a string to uppercase,
 * leaving the rest of the string unchanged.
 */

import capitalize from '../src/capitalize.js';

describe('capitalize', () => {

  /**
   * @test
   * @description Should capitalize the first letter of a string.
   * Works for lowercase, uppercase, and multi-word strings.
   */
  test('should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('HELLO');
    expect(capitalize('hello world')).toBe('Hello world');
  });

  /**
   * @test
   * @description Should handle single character strings.
   */
  test('should handle single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  /**
   * @test
   * @description Should return an empty string if the input is empty.
   */
  test('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

});
