/**
 * @fileoverview Unit tests for the `divide` function.
 * The `divide` function divides the first number by the second number.
 * It handles positive numbers, negative numbers, decimals, and division by zero.
 */

import divide from '../src/divide.js';

describe('divide', () => {

  /**
   * @test
   * @description Should divide positive numbers correctly.
   */
  test('should divide positive numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(10, 2)).toBe(5);
  });

  /**
   * @test
   * @description Should handle division by zero.
   * Division by zero returns Infinity or NaN if 0/0.
   */
  test('should handle division by zero', () => {
    expect(divide(10, 0)).toBe(Infinity);
    expect(divide(0, 0)).toBe(NaN);
  });

  /**
   * @test
   * @description Should correctly divide negative numbers.
   */
  test('should handle negative numbers', () => {
    expect(divide(-6, 3)).toBe(-2);
    expect(divide(6, -3)).toBe(-2);
    expect(divide(-6, -3)).toBe(2);
  });

  /**
   * @test
   * @description Should correctly divide numbers resulting in decimals.
   */
  test('should handle decimals', () => {
    expect(divide(5, 2)).toBe(2.5);
  });

});
