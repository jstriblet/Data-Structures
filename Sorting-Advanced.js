// Merge Sort - More difficult to implement
// improve time complexity from O(n^2) to O(n log n)

// merge - helper function to merge two sorted arrays
const merge = (arr1, arr2) => {
    let sortedArr = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j]) 
            j++
        }
    }

    while (i < arr2.length) {
        sortedArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j])
        j++
    }

    return sortedArr
}

// merg sort has a time complexity of n log n
const mergeSort = arr => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
// console.log(mergeSort([10,24,2]))

// Quick sort

// Helper function (pivot)
const pivot = (arr, start=0, end=arr.length) => {

    // Helper swap function
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let pivot = arr[start];
    let pivotIndex = start

    for (i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++
            swap(arr, pivotIndex, i)
        }
    }
    swap(arr, start, pivotIndex)
    return pivotIndex
}

const quickSort = (arr, left=0, right=arr.length-1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left 
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr
}

// console.log(quickSort([5,4,3,6,1,8,9,6]))

// Radix Sort
// given and interger and an index, return the digit at that index
const getDigit = (num, idx=0) => {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10
}
// Count how many digits are in a number
const digitCount = num => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
// return the count of digits for the largest number in an array
const mostDigits = arr => {
    let maxDigits = 0
    for (item of arr) {
        maxDigits = Math.max(digitCount(item), maxDigits)
    }
    return maxDigits
}

const radixSort = arr => {
    let loopCount = mostDigits(arr);

    for (let i = 0; i < loopCount+1; i++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let k = 0; k < arr.length; k++) {
            let bucket = getDigit(arr[k], i)
            digitBuckets[bucket].push(arr[k])
        }
        arr = [].concat(...digitBuckets)
    }

    return arr
}

console.log(radixSort([123,355,235,23,236]))