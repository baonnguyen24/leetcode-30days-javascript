// easy/compositionFunction.js
// Problem: https://leetcode.com/problems/function-composition
// Description: Implement Array.compose manually

// -------------------
// Solution
// -------------------
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x;
        for(let i = functions.length-1; i >= 0 ; i--){
            result = functions[i](result);
        }
        return result;

        if (functions.length === 0) return x => x;
    }
};

// -------------------
// Unit Tests
// -------------------
const functions = [];           // no functions to apply
const fn = compose(functions);  // compose returns x => x
console.log(fn(5));             // 5 (input unchanged)

const functions1 = [x => x + 1, x => x * x, x => 2 * x]
const fn1 = compose(functions1);
console.log(fn1(4));