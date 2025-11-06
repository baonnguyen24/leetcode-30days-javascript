// easy/filterFunction.js
// Problem: https://leetcode.com/problems/filter-elements-from-array
// Description: Implement Array.filter manually

// -------------------
// Solution
// -------------------

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};


// -------------------
// Unit Tests
// -------------------
function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1 }

console.log("Test 1: ", filter([0, 10, 20, 30], greaterThan10)); // expecting [20, 30]
console.log("Test 1: ", filter([1, 2, 3], firstIndex));   // expecting [1]
console.log("Test 1: ", filter([-2, -1, 0, 1, 2], plusOne));// expecting [-2, 0, 1, 2]