// easy/reduceFunction.js
// Problem: https://leetcode.com/problems/array-reduce-transformation
// Description: Implement Array.reduce manually

// -------------------
// Solution
// -------------------

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for(let i = 0; i < nums.length; i++){
        result = fn(result, nums[i]);
    }

    return result;
};

// -------------------
// Unit Tests
// -------------------
function sum1(accum, curr) { return accum + curr; }
function sum2(accum, curr) { return accum + curr * curr; }
function sum3(accum, curr) { return 0; }

console.log("Test 1: ", reduce([1, 2, 3, 4], sum1, 0)); // expecting 10
console.log("Test 1: ", reduce([1, 2, 3, 4], sum2, 100));   // expecting 130
console.log("Test 1: ", reduce([], sum3, 25));// expecting 25