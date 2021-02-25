//const arr = [23, 54, 5,55, 90, 12, 1, 0, 87, 1000, 7, 9, -1200];
const arr = [8, 1, 2, 3, 4, 5, 6, 7];

function swap(arr, indexOne, indexTwo) {

    let temp =  arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;

    return arr;
}

function checker(arr) {
    for(let i = 0; i < arr.length; i++) {
        let iIncrement = i + 1;
        if(arr.length - 1 >= iIncrement) {
            if (arr[i] > arr[iIncrement]) {
                return true;
            }
        }
    }
    return false;
}

function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        let iIncrement = i+1;
        if(arr.length - 1 >= iIncrement) {
            console.log(arr, arr[i], arr[iIncrement]);
            if (arr[i] > arr[iIncrement]) {
                arr = swap(arr, i, iIncrement);
            }
        }
    }

    const result = checker(arr);
   // console.log(result);
    if(result) {
        bubbleSort(arr);
    }

    return arr;
}

console.log(bubbleSort(arr));
