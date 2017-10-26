let Merge = (array, p, q, r) => {
    let n1 = q - p + 1;
    let n2 = r - q;
    let left_array = new Array(n1 + 1), right_array = new Array(n2 + 1);

    for (let i = 0; i < n1; i++) {
        left_array[i] = array[p + i];
    }

    for (let j = 0; j < n2; j++) {
        right_array[j] = array[q + j + 1];
    }

    left_array[n1] = Infinity;
    right_array[n2] = Infinity;

    let i = 0, j = 0;

    for (let k = p; k <= r; k++) {
        if (left_array[i] <= right_array[j]) {
            array[k] = left_array[i];
            i++;
        } else {
            array[k] = right_array[j];
            j++;
        }
    }
}

let MergeSort = (array, p = 0, r = array.length - 1) => {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        MergeSort(array, p, q);
        MergeSort(array, q + 1, r);
        Merge(array, p, q, r);
    }
}