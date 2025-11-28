import { describe, it, expect } from '@jest/globals';
import capitalize from '../src/capitalize.js';
import upperFirst from '../src/upperFirst.js';
import endsWith from '../src/endsWith.js';

describe('String functions', () => {

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
