
// Count the unique values in an array (sorted array)
function countUniqueValues(arr){
  let i = 0
  let j = 1
  
    if (arr.length === 0) {
        return 0
    }

  while (j < arr.length) {
      if(arr[i] === arr[j]) {
        j++
      } else {
        i++
        arr[i] = arr[j]
        j++
      }
  }
  return i + 1
}
// console.log(countUniqueValues([1,1,2,2,3,4,5,6,6,7,8,9,9]))

// Check to see if input arguments have duplicates
function areThereDuplicates() {
    arr = Object.values(arguments).sort();
    if (arr.length === 0) return false
    i = 0
    j = 1

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            return true
        } else {
            i++
            j++
        }
    }
    return false
}
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// check to see if a sorted array contains two digits that average the provided avg
function averagePair(arr, avg) {
    let i = 0
    let j = arr.length - 1
    let currAvg
    while (i < j) {
        currAvg = (arr[i]+arr[j]) / 2
        if (currAvg === avg) {
            return true
        } else if (currAvg < avg) {
            i++
        } else {
            j--
        }
    }
    return false
}
// console.log(averagePair([1,2,3], 2.6)) 

// Check to see if the characters in string1 are in string2 in the same order
const isSubsequence = function (str1, str2) {
    if (str1.length === 0 || str2.length === 0) return false;
    let i = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            i++
        }
        if (i === str1.length) {
            return true
        }
    }
    return false

}
console.log(isSubsequence('hello', 'hello world'));