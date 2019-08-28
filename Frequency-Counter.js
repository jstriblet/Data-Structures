function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!

if (str1.length !== str2.length) return false

  const obj1 = {}
  const obj2 = {}
  
  for (let val of str1) {
      obj1[val] = (obj1[val] || 0) + 1
  }
  for (let val of str2) {
      obj2[val] = (obj2[val] || 0) + 1
  }
  for (let key in obj1) {
      if(!(key in obj2)) {
          return false
      }
      if(obj1[key] !== obj2[key]) {
          return false
      }
  }
  return true
}

function sameFrequency(num1, num2){
    num1String = num1.toString()
    num2String = num2.toString()

  if(num1String.length !== num2String.length) return false
  const frequencyOne = {}
  for (digit of num1String) {
      frequencyOne[digit] = frequencyOne[digit] ? frequencyOne[digit] + 1  : 1
  }
  for (digit of num2String) {
      if(!frequencyOne[digit]) {
          return false
      } else {
          frequencyOne[digit] = frequencyOne[digit] - 1
      }
  }
  return true
}

console.log(sameFrequency(3589578, 5879385));