import { describe, it, expect } from '@jest/globals';
import camelCase from '../src/camelCase.js';
import capitalize from '../src/capitalize.js';
import upperFirst from '../src/upperFirst.js';
import endsWith from '../src/endsWith.js';

describe('String functions', () => {
  describe('camelCase', () => {
    it('snake_case', () => expect(camelCase('foo_bar')).toBe('fooBar'));
    it('multiple words', () => expect(camelCase('foo bar baz')).toBe('fooBarBaz'));
    it('already camelCase', () => expect(camelCase('fooBar')).toBe('fooBar'));
    it('empty', () => expect(camelCase('')).toBe(''));
    it('with spaces', () => expect(camelCase('  foo  bar  ')).toBe('fooBar'));
  });

  describe('capitalize', () => {
    it('hello→Hello', () => expect(capitalize('hello')).toBe('Hello'));
    it('already', () => expect(capitalize('Hello')).toBe('Hello'));
    it('empty', () => expect(capitalize('')).toBe(''));
  });

  describe('upperFirst', () => {
    it('hello→Hello', () => expect(upperFirst('hello')).toBe('Hello'));
    it('multiple words', () => expect(upperFirst('hello world')).toBe('Hello world'));
  });

  describe('endsWith', () => {
    it('hello endsWith o', () => expect(endsWith('hello', 'o')).toBe(true));
    it('case sensitive', () => expect(endsWith('hello', 'O')).toBe(false));
    it('longer substring', () => expect(endsWith('hello', 'hello')).toBe(true));
  });
});
