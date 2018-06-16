// === Solution 1: using Lodash ===
const range = require('lodash/range')

let total = 0

for (n of range(11, 20, 2)) {
  total += n
}

// === Solution 2: using for loop ===
let total = 0

for (let n = 11; n < 20; n += 2) {
  total += n
}

// === Solution 3: using Lodash and reduce() ===
const range = require('lodash/range')

let total = range(11, 20, 2).reduce((total, val) => total += val, 0)

console.log(total)