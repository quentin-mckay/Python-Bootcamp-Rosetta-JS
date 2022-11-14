let myStuff = [1, 2,0, "three", "four"]


// ===== using lodash =====
const range = require('lodash/range')

let nums = range(1, 100)  // returns an array


// ===== vanilla (ES6) =====

// Array(99).keys() creates "Array Iterator" that contains
// the values [0, ..., 98].
// Then Array.from() converts it to an actual "Array" and
// we pass a mapping function to change values to [1, ..., 99]
let nums = Array.from(Array(99).keys(), x => x + 1)