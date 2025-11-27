const camelCase = require('../src/camelCase');
const capitalize = require('../src/capitalize');
const upperFirst = require('../src/upperFirst');
const endsWith = require('../src/endsWith');

describe('String functions', () => {
  describe('camelCase', () => {
    test('snake_case', () => expect(camelCase('foo_bar')).toBe('fooBar'));
    test('multiple words', () => expect(camelCase('foo bar baz')).toBe('fooBarBaz'));
    test('already camelCase', () => expect(camelCase('fooBar')).toBe('fooBar'));
    test('empty', () => expect(camelCase('')).toBe(''));
  });

  describe('capitalize', () => {
    test('normal', () => expect(capitalize('hello')).toBe('Hello'));
    test('already capitalized', () => expect(capitalize('Hello')).toBe('Hello'));
    test('empty', () => expect(capitalize('')).toBe(''));
  });

  describe('upperFirst', () => {
    test('lowercase', () => expect(upperFirst('hello')).toBe('Hello'));
    test('mixed case', () => expect(upperFirst('hELLO')).toBe('HELLO'));
  });

  describe('endsWith', () => {
    test('true case', () => expect(endsWith('hello world', 'world')).toBe(true));
    test('false case', () => expect(endsWith('hello world', 'foo')).toBe(false));
    test('position', () => expect(endsWith('hello world', 'o', 6)).toBe(false));
  });
});
