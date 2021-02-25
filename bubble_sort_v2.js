const arr = [8, 1, 2, 3, 4, 5, 6, 7];

function swap(arr, indexOne, indexTwo) {

    let temp =  arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
    return arr;
}

function test() {

}

function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            let jIncrement = j+1;
            console.log(arr[jIncrement]);
            if (arr[j] > arr[jIncrement]) {
                arr = swap(arr, j, jIncrement);
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));
