// Find Max sum of array given the array and lenth of subarray
const maxSubarraySum = function(arr, count) {
    if (arr.length === 0 || arr.length < count) return null
    let maxValue = 0
    let tempValue = -Infinity
    let i = 0;
    while (i < count) {
        maxValue += arr[i]
        i++
    }

    maxValue = Math.max(tempValue, maxValue)
    tempValue = maxValue

    for (let j = count; j < arr.length; j++) {
        tempValue = tempValue - arr[j-count] + arr[j];
        maxValue = Math.max(tempValue, maxValue)
    }
    return maxValue
}
// console.log(maxSubarraySum([100,200,300,400],2))

// Find Min sum of array given the array and lenth of subarray
const minSubArrayLen = function(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity

    while(start < nums.length) {
        // if current window dosen't add up to the given sum then
            // move to the window to the right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end ++
        }
        // if current window adds up to at least the sime given
            // then we can shrink the window
        else if (total >= sum) {
            console.log( end, start, end-start)
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        } 
        // current total less than required total but we reach the end,
            // need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen

}
//console.log(minSubArrayLen([1,2,3,4,5,5, 5, 5, 5, 5, 5],10));

// Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with
    // with all distinct values
const findLongestSubstring = function(string) {
    let longest = 0;
    let seen = {};
    let start = 0;
    let char

    for (let i = 0; i < string.length; i++) {
        char = string[i];
        if (seen[char]){
            start = Math.max(start, seen[char])
        }
         // Store longest length

        longest = Math.max(longest, i - start + 1)

        seen[char] = i + 1
    }

return longest

}
// console.log(findLongestSubstring('bcdf'));

