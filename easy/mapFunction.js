// easy/mapFunction.js
// Problem: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
// Description: Implement Array.map manually

// -------------------
// Solution
// -------------------

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// -------------------
// Unit Tests
// -------------------
function plusOne(n) { return n+1; }
function plusI(n, i) { return n+i; }
function constant(n) { return 42; }

console.log("Test 1: ", map([1,2,3], plusOne)); // expecting [2,3,4]
console.log("Test 1: ", map([1,2,3], plusI));   // expecting [1,3,5]
console.log("Test 1: ", map([1,2,3], constant));// expecting [42,42,42]