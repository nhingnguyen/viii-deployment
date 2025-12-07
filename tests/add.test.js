/**
 * @file add.test.js
 * @description Unit tests for the `add` function. These tests verify correct behavior
 * for positive numbers, negative numbers, zero-handling, and large numeric values.
 */

import add from '../src/add.js';

describe('add', () => {
  
  /**
   * @test
   * @description Should correctly add two positive numbers.
   */
  test('should add two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(0, 0)).toBe(0);
  });

  /**
   * @test
   * @description Should correctly add negative values and mixed positive/negative numbers.
   */
  test('should add negative numbers', () => {
    expect(add(-6, 4)).toBe(-2);
    expect(add(-6, -4)).toBe(-10);
  });

  /**
   * @test
   * @description Should correctly handle zero in addition.
   */
  test('should handle zero correctly', () => {
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(5);
  });

  /**
   * @test
   * @description Should correctly add large integer values.
   * Ensures that the function handles numbers near JavaScript's safe range.
   */
  test('should work with large numbers', () => {
    expect(add(9007199254740991, 1)).toBe(9007199254740992);
  });
});
