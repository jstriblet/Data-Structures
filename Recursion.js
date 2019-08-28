// Pure recursion Tips
    // For arrays, use mothods like slice, spread and concat 
        // that make copies of arrays so you do not mutate them
    // Strings are immutable to you will need to use methods like slice, substr, or substring
        // to make copies of strings
    // To make copies of objects use Object.assign, ot the spread operator

// Factorial
const findFactorial = function (num) {
    if(num === 0) return 1;
    return num * findFactorial(num - 1)
}
//  console.log(findFactorial(6))

// Exponent recursion
const power = function(base, exp) {
    if (exp === 0) return 1
    return base * power(base, exp - 1)
}
//  console.log(power(3, 12))

// Product of an array
const productOfArray = function (arr) {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
//  console.log(productOfArray([1,2,3,4,5,6]));

// sum all numbers within a range from 0 to the imput number
const recursiveRange = function (num) {
    if (num === 0) return 0
    return num + recursiveRange(num-1)
}
//  console.log(recursiveRange(6));

// find the nth fibbanaci number
const fib = function (n) {
    if (n < 2) return n
    return fib(n-1) + fib(n-2)
}
//  console.log(fib(6))

// Reverse the string
const reverse = function (string) {
    return string.length === 0 ? '' : string.substr(-1) + reverse(string.substring(0, string.length-1))
}
// console.log(reverse('striblet'));

// Determine if the string is a palendrome
const isPalindrome = function (string) {
    if (string.length <= 1) return true
    return string.substr(0,1) === string.substr(-1) && isPalindrome(string.substring(1, string.length-1))
}
//  console.log(isPalindrome('taccat'));

// Write a recursive function called someRecursive which accepts an array and a callback. 
    // The function returns true if a single value in the array returns true when passed 
    // to the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;
const someRecursive = function (arr, func) {
    return arr.length === 0 ? false : someRecursive(arr.slice(1), func) || func(arr[0])
}
//  console.log(someRecursive([2, 2, 2, 2], isOdd))

// Write a function that takes an array of arrays and flattents the array,
    // ie, remove all start and ending square brakets that are not the outer most
const flatten = function (arr) {
    console.log(arr)
    if (arr.length === 0) return []
    let arrFlat = []
    if (!Array.isArray(arr[0])) {
        arrFlat.push(arr[0])
        return arrFlat.concat(flatten(arr.slice(1)))
    } 
    return flatten(arr[0]).concat(flatten(arr.slice(1)))
}
//  console.log(flatten([1, [2, [3, 4], [[5]]]]));

 // Write a function called capitalizeFirst that capitalize the first letter of seach strign in the array
 const capitalizeFirst = function (arr) {
     let capArray = []
     if (arr.length === 0) return []
     capArray.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
     return capArray.concat(capitalizeFirst(arr.slice(1)))
 }
//  console.log(capitalizeFirst(['car','taco','banana']))

// Write a function that looks at nested values in objects and returns the sum of the values that are even
const nestedEvenSum = function (obj) {
    let evenValues = []
    const sumHelper = obj => {
        let objValues = Object.values(obj)
        for (let val of objValues) {
            if (typeof val === 'number' && val % 2 === 0) evenValues.push(val)
            if (typeof val === 'object') sumHelper(val)
        }
    }
    sumHelper(obj)
    return evenValues.reduce((total, num) => total + num)
}
let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
//  console.log(nestedEvenSum(obj2))

// Write a function that takes an array of words and capitalizes each word
const capitalizeWords = function (arr) {
    if (arr.length === 0) return []
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}
// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))

// Write a function that searches through nested objects and converts numbers 
    // into strings
function stringifyNumbers(obj) {
  if (!Object.keys(obj).length) return {};
 
  const key = Object.keys(obj)[0];
  // destructuring object into distinct values (val, left)
  const { [key]: val, ...left } = obj;

  if (Number.isInteger(val)) {
    obj[key] = String(val);
  } else if (typeof val === 'object') {
    obj[key] = stringifyNumbers(val);
  }
 
  return {
    ...obj,
    ...stringifyNumbers(left),
  };
}

let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
// console.log(stringifyNumbers(obj))

// Write a function that takes an object with nested objects
    // and compiles an array with just the strings
const collectStrings = function (obj) {
    let result = []
    const collectHelper = function (obj) {
        objValues = Object.values(obj)
        for (let val of objValues) {
            if (typeof val === 'string') {
                result.push(val)
            } else if ( typeof val === 'object') {
                collectHelper(val)
            }
        }
    }
    collectHelper(obj)
    return result
}
// I think this could be writen without the helper function 
const obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
// console.log(collectStrings(obj4))