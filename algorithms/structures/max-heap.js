
const left = (i) => {
    return 2 * i + 1;
}

const right = (i) => {
    return 2 * i + 2;
}

const maxHeapify = (heap, i) => {
    let l = left(i),
        r = right(i),
        largest;

    if (l < heap.heapSize && heap[l] > heap[i]) {
        largest = l;
    } else {
        largest = i;
    }

    if (r < heap.heapSize && heap[r] > heap[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let temp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = temp;

        maxHeapify(heap, largest);
    }
}

const buildMaxHeap = (array) => {
    let maxHeap = [].concat(array);
    maxHeap.heapSize = array.length;
    let p = Math.floor(maxHeap.length / 2) - 1;

    for (let i = p; i >= 0; i--) {
        maxHeapify(maxHeap, i);
    }

    return maxHeap;
}

export { maxHeapify, buildMaxHeap };
