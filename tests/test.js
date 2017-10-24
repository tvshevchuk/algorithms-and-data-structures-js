
it('should sort by Insertion-sort', () => {
    let array = [2, 1, 100, -4];
    let expectedArray = [-4, 1, 2, 100];

    InsertionSort(array);
    expect(array).toEqual(expectedArray);
});