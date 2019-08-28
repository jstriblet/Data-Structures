'use strict'

const sortedArr = [45,32,11,20,32, 17, 77].sort(function(a,b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
});

// console.log(sortedArr);

// Helper swap function
const swap = (arr, idx1, idx2) => {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// Implement bubble sort (larger values bubble to the end)
// Optimized with noSwaps variable
const bubbleSort = function (arr) {
    let noSwaps
    for (let i = arr.length-1; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

// console.log(bubbleSort([45,32,11,20,32, 17,77]));

// Selection Sort (select minimum item in array and put it in start)
const selectionSort = arr => {
    let currMin = 0
    for(let i = 0; i < arr.length; i++) {
        currMin = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[currMin] > arr[j]) {
                currMin = j
            }
        }
        swap(arr, i, currMin)
    }
    return arr
}
// console.log(selectionSort([88,45,32,11,20,32, 17,77]));

// Insertion Sort (gradualy sort array by inserting current element where it goes)
// insertion sort is an 'on-line' algorithm
const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for(let j = i-1; j > -1 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}
// console.log(insertionSort([88,45,32,11,20,32, 17,77]));