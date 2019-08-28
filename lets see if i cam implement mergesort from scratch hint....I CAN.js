// merge sort
const mergeHelper = (arr1, arr2) => {
    let newArr = new Array()
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j])
            j++
        } else {
            newArr.push(arr2[j])
            newArr.push(arr1[i])
            i++
            j++
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    return newArr
}

// Merge Sort
const mergeSort = arr => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return mergeHelper(left, right)
}

console.log(mergeSort([12,4,42,57,1245,1,8,5,0,34,764,246]));