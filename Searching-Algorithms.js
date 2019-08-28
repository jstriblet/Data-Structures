// Create a simple linear searching algorithm (unsorted array)
const linearSearch = function (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}
// console.log(linearSearch([10,15,20,25,30], 31))

// Divide and Conquer, binary search
// Return the index of 'val', if not present, return -1 
// Only works on dorted arrays!
const binarySearch = function (arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {

        mid = Math.floor((right + left) / 2)

        if (arr[mid] === val) {
            return mid
        } else if (arr[mid] < val) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
// console.log(binarySearch([ -345, -100, -86, 2, 11, 23, 56, 78, 586, 987 ], 44))

// Naive substring search
const stringSearch = function (sub, string) {
    let counter = 0

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < sub.length; j++) {
            if (string[i+j] !== sub[j]) break
            if (j === sub.length - 1) counter++
        }
    }
    return counter
}

//console.log(stringSearch('sub', 'substringsub'));

// look up KMP Search algorithm in Javascript