/**
 * @fileoverview Unit tests for the `words` function.
 * The `words` function splits a string into an array of words.
 * It handles spaces, punctuation, camelCase, and special characters.
 * Returns an empty array for empty, null, or undefined input.
 */

import words from '../src/words.js';

describe('words', () => {

  /**
   * @test
   * @description Should split a string into words separated by spaces and punctuation.
   */
  test('should split string into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  /**
   * @test
   * @description Should handle camelCase strings by splitting words correctly.
   */
  test('should handle camelCase', () => {
    expect(words('camelCase')).toEqual(['camel', 'Case']);
  });

  /**
   * @test
   * @description Should return an empty array for empty string.
   */
  test('should handle empty string', () => {
    expect(words('')).toEqual([]);
  });

  /**
   * @test
   * @description Should return an empty array for null or undefined input.
   */
  test('should handle null or undefined', () => {
    expect(words(null)).toEqual([]);
    expect(words(undefined)).toEqual([]);
  });

  /**
   * @test
   * @description Should correctly split strings containing special characters.
   */
  test('should handle strings with special characters', () => {
    expect(words('hello-world_foo.bar')).toEqual(['hello', 'world', 'foo', 'bar']);
  });

});
