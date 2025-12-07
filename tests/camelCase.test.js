/**
 * @fileoverview Unit tests for the `camelCase` function.
 * The `camelCase` function converts a string to camelCase format.
 * It handles spaces, underscores, dashes, uppercase letters, numbers, and special characters.
 */

import camelCase from '../src/camelCase.js';

describe('camelCase', () => {

  /**
   * @test
   * @description Should convert strings with spaces, dashes, or underscores to camelCase.
   */
  test('should convert string to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  /**
   * @test
   * @description Should handle single word strings (preserve lowercase).
   */
  test('should handle single word', () => {
    expect(camelCase('foo')).toBe('foo');
    expect(camelCase('FOO')).toBe('foo');
  });

  /**
   * @test
   * @description Should return empty string when input is empty.
   */
  test('should handle empty string', () => {
    expect(camelCase('')).toBe('');
  });

  /**
   * @test
   * @description Should correctly handle strings containing numbers.
   */
  test('should handle strings with numbers', () => {
    expect(camelCase('foo2bar')).toBe('foo2bar');
    expect(camelCase('foo 2 bar')).toBe('foo2Bar');
  });

  /**
   * @test
   * @description Should remove special characters and convert to camelCase.
   */
  test('should handle special characters', () => {
    expect(camelCase('foo@bar')).toBe('fooBar');
    expect(camelCase('foo.bar')).toBe('fooBar');
  });

  /**
   * @test
   * @description Should return empty string for null or undefined input.
   */
  test('should return empty string for null/undefined', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });

});
