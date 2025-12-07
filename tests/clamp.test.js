/**
 * @fileoverview Unit tests for the `clamp` function.
 * The `clamp` function restricts a number within the inclusive lower and upper bounds.
 * It handles positive numbers, negative numbers, and equal bounds.
 */

import clamp from '../src/clamp.js';

describe('clamp', () => {

  /**
   * @test
   * @description Should clamp numbers within the specified bounds.
   */
  test('should clamp number within bounds', () => {
    expect(clamp(3, 1, 5)).toBe(3);
    expect(clamp(0, 1, 5)).toBe(1);
    expect(clamp(10, 1, 5)).toBe(5);
  });

  /**
   * @test
   * @description Should handle negative bounds correctly.
   */
  test('should handle negative bounds', () => {
    expect(clamp(-3, -5, -1)).toBe(-3);
    expect(clamp(-6, -5, -1)).toBe(-5);
  });

  /**
   * @test
   * @description Should handle the case where lower and upper bounds are equal.
   */
  test('should handle equal bounds', () => {
    expect(clamp(5, 5, 5)).toBe(5);
  });

});
