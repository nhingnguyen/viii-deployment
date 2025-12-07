/**
 * @fileoverview Unit tests for the `eq` function.
 * The `eq` function performs a SameValueZero comparison between two values.
 * It returns true if the values are considered equivalent, including NaN comparisons.
 */

import eq from '../src/eq.js';

describe('eq', () => {

  /**
   * @test
   * @description Should return true for equal primitive values.
   */
  test('should return true for equal primitives', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('hello', 'hello')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(null, null)).toBe(true);
  });

  /**
   * @test
   * @description Should return false for different primitive values.
   */
  test('should return false for different primitives', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('hello', 'world')).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

  /**
   * @test
   * @description Should compare objects by reference, not by value.
   */
  test('should compare objects by value', () => {
    expect(eq({ a: 1 }, { a: 1 })).toBe(false);
    expect(eq([], [])).toBe(false);
  });

  /**
   * @test
   * @description Should correctly handle NaN comparisons.
   */
  test('should handle NaN correctly', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

});
