function bubbleSort(arr: number[]): void {
    for(let i = 0; i < arr.length, ++i;) {
        for(let j = 0; i < arr.length - 1 - i, ++j;) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}