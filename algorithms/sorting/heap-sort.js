import { maxHeapify, buildMaxHeap } from '../structures/max-heap';

const HeapSort = (array) => {
    let heap = buildMaxHeap(array);
    for (let i = array.length - 1; i > 0; i--) {
        let temp = heap[i];
        heap[i] = heap[0];
        heap[0] = temp;

        heap.heapSize--;
        maxHeapify(heap, 0);
    }

    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(heap[i]);
    }

    return result;
}

export default HeapSort;
