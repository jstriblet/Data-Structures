/**
 * Dynamic Programing - A method sor solving a complex problem by breaking it
 * down into a collection of simpler subproblems, solving each of those subproblems
 * just once, and storing their soloutions
 * - How do we know when we can use it?
 * - Overlapping subproblems:
 * A problem is said to have overlaping subproblems if it can be broken down into 
 * subproblems which are reused several times (fibonnaci sequence)
 * look for repitition
 * uses the same pieces of information to dirive the soloution
 * - Optimal Substructure:
 * A problem is said to have optimal substructure if an optimal soloution 
 * can be constructed from optimal soloutions of its subproblems
 * 
 */

// Memoization - Storign the results of expensive function calls and returning the 
// cached result when the same inputs occur again

let memo1 = {};
const fib = n => {
    if (n <= 2) return 1
    if (memo1[n]) {
        return memo1[n]
    } else {
        memo1[n] = fib(n-1) + fib(n-2)
        return memo1[n]
    }
}

const fib2 = (n, memo={}) => {
    if (n <= 2) return 1
    if (memo[n]) return memo[n]
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib2(5));
console.log(fib(2));