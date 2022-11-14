// ===== using Lodash =====
const range = require('lodash/range')  // Cherry-pick methods for smaller browserify/rollup/webpack bundles.

for (let i of range(0,10,2)) {
  console.log(i) // -> 0 2 4 6 8
}


// ===== simple version using spread =====
let arr = [...Array(10).keys()]  // [0, 1, 2, ..., 9]


// creates [1, 2, 3, ..., 10]
let arr2 = Array.from(Array(10).keys(), n => n + 1)


// without creating temporary intermediate array
let arr = Array.from({ length: 10 }, (_, i) => i)