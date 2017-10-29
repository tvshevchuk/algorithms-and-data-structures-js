import HeapSort from '../algorithms/sorting/heap-sort';
import InsertionSort from '../algorithms/sorting/insertion-sort';
import MergeSort from '../algorithms/sorting/merge-sort';

import { buildMaxHeap } from '../algorithms/structures/max-heap';

it('should sort by Insertion-sort', () => {
    let array = [2, 1, 100, -4];
    let expectedArray = [-4, 1, 2, 100];

    InsertionSort(array);
    expect(array).toEqual(expectedArray);
});

it ('should sort by merge-sort', () => {
    let array = [2, 1, 100, -4];
    let expectedArray = [-4, 1, 2, 100];

    MergeSort(array);
    expect(array).toEqual(expectedArray);
});

it ('should build max-heap', () => {
    let array = [3, 9, 5, 1, 4];
    let expectedHeap = [9, 4, 5, 1, 3];
    expectedHeap.heapSize = 5;

    let maxHeap = buildMaxHeap(array);
    expect(maxHeap).toEqual(expectedHeap);
});

it('should sort by Heap-Sort', () => {
    let array = [2, 1, 100, -4];
    let expectedArray = [-4, 1, 2, 100];

    let result = HeapSort(array);
    expect(result).toEqual(expectedArray);
});