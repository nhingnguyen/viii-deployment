import add from '../src/add.js';
import divide from '../src/divide.js';
import ceil from '../src/ceil.js';
import clamp from '../src/clamp.js';

describe('Math functions', () => {
  describe('add', () => {
    test('positive numbers', () => expect(add(2, 3)).toBe(5));
    test('negative numbers', () => expect(add(-1, 1)).toBe(0));
    test('zero', () => expect(add(0, 5)).toBe(5));
    test('floats', () => expect(add(1.5, 2.5)).toBe(4));
  });

  describe('divide', () => {
    test('normal division', () => expect(divide(10, 2)).toBe(5));
    test('division by zero', () => expect(divide(10, 0)).toBe(Infinity));
    test('negative numbers', () => expect(divide(-10, 2)).toBe(-5));
  });

  describe('ceil', () => {
    test('positive float', () => expect(ceil(4.2)).toBe(5));
    test('negative float', () => expect(ceil(-4.2)).toBe(-4));
    test('integer', () => expect(ceil(5)).toBe(5));
  });

  describe('clamp', () => {
    test('within bounds', () => expect(clamp(5, 1, 10)).toBe(5));
    test('below lower bound', () => expect(clamp(0, 1, 10)).toBe(1));
    test('above upper bound', () => expect(clamp(15, 1, 10)).toBe(10));
  });
});

