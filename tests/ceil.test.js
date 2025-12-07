/**
 * @fileoverview Unit tests for the `ceil` function.
 * The `ceil` function rounds a number up to the nearest integer or to a specified precision.
 * It handles positive numbers, negative numbers, integers, large numbers, zero, and non-numeric input.
 */

import ceil from '../src/ceil.js';

describe('ceil', () => {

  /**
   * @test
   * @description Should round positive numbers up to the nearest integer.
   */
  test('should round up to nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(6.004)).toBe(7);
    expect(ceil(0.046)).toBe(1);
  });

  /**
   * @test
   * @description Should correctly round negative numbers up (towards zero).
   */
  test('should handle negative numbers', () => {
    expect(ceil(-4.006)).toBe(-4);
    expect(ceil(-6.004)).toBe(-6);
  });

  /**
   * @test
   * @description Should round numbers to a specified precision.
   */
  test('should round up to specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(6040, -2)).toBe(6100);
  });

  /**
   * @test
   * @description Should handle zero correctly.
   */
  test('should handle zero', () => {
    expect(ceil(0)).toBe(0);
  });

  /**
   * @test
   * @description Should return integers as-is.
   */
  test('should handle integers', () => {
    expect(ceil(5)).toBe(5);
    expect(ceil(10)).toBe(10);
  });

  /**
   * @test
   * @description Should handle very large numbers correctly.
   */
  test('should handle large numbers', () => {
    expect(ceil(999999.9999)).toBe(1000000);
  });

  /**
   * @test
   * @description Should return NaN for non-numeric input.
   */
  test('should return NaN for non-numeric input', () => {
    expect(ceil('abc')).toBeNaN();
  });

});
