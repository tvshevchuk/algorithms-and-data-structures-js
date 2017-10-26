
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