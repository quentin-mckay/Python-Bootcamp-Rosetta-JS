// ===== vanilla (ES6) =====
let answer = Array.from(Array(100).keys(), n => n + 1).filter(n => n % 12 === 0)


// ===== using lodash =====
const range = require('lodash/range')

let answer = range(1, 101).filter(n => n % 12 === 0)