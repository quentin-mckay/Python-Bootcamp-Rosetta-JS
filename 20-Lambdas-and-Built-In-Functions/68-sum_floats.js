// note: all numbers are floats in javascript
// bug: 1.0, 2.000 are considered "integers"
// not entirely sure how to fix this (regex would work but seems hacky)

// check if it's a number and not divisible by 1
const isFloat = x => typeof(x) === 'number' && !Number.isInteger(x)

function sumFloats(...args) {
    return args.filter(isFloat).reduce((sum, n) => sum + n, 0)
}



// === tests ===
console.log(sumFloats(1.5, 2.4, 'awesome', [], 1))
console.log(sumFloats(1, 2, 3, 4, 5))