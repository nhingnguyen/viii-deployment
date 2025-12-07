/**
 * @fileoverview Unit tests for the `defaultTo` function.
 * The `defaultTo` function returns the given value if it is not null, undefined, or NaN.
 * Otherwise, it returns the provided default value.
 */

import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {

  /**
   * @test
   * @description Should return the value itself if it is not null, undefined, or NaN.
   */
  test('should return value if not null, undefined, or NaN', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('a', 'default')).toBe('a');
    expect(defaultTo(false, true)).toBe(false);
    expect(defaultTo(0, 10)).toBe(0);
  });

  /**
   * @test
   * @description Should return the default value if input is null.
   */
  test('should return default value for null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  /**
   * @test
   * @description Should return the default value if input is undefined.
   */
  test('should return default value for undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  /**
   * @test
   * @description Should return the default value if input is NaN.
   */
  test('should return default value for NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  /**
   * @test
   * @description Should handle empty string by returning it as-is.
   */
  test('should handle empty string', () => {
    expect(defaultTo('', 'default')).toBe('');
  });

});
