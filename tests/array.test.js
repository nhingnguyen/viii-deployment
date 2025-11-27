import chunk from '../src/chunk.js';
import drop from '../src/drop.js';
import slice from '../src/slice.js';
import compact from '../src/compact.js';

describe('Array functions', () => {
  const arr = [1, 2, 3, 4, 5];

  describe('chunk', () => {
    test('size 2', () => expect(chunk(arr, 2)).toEqual([[1,2], [3,4], [5]]));
    test('size 3', () => expect(chunk(arr, 3)).toEqual([[1,2,3], [4,5]]));
    test('empty array', () => expect(chunk([], 2)).toEqual([]));
  });

  describe('drop', () => {
    test('drop 2', () => expect(drop(arr, 2)).toEqual([3,4,5]));
    test('drop more than length', () => expect(drop(arr, 10)).toEqual([]));
    test('drop 0', () => expect(drop(arr, 0)).toEqual(arr));
  });

  describe('slice', () => {
    test('start and end', () => expect(slice(arr, 1, 3)).toEqual([2,3]));
    test('only start', () => expect(slice(arr, 2)).toEqual([3,4,5]));
    test('negative indices', () => expect(slice(arr, -2)).toEqual([4,5]));
  });

  describe('compact', () => {
    test('remove falsy', () => expect(compact([0, 1, false, 2, '', 3])).toEqual([1,2,3]));
    test('empty array', () => expect(compact([])).toEqual([]));
    test('all truthy', () => expect(compact([1,2,3])).toEqual([1,2,3]));
  });
});
