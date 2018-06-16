// ===== using lodash =====
const range = require('lodash/range')

let answer = range(0,3).map(x => range(0,3))


// ===== vanilla for loops =====
let answer = []
for (let i = 0; i < 3; i++) {
    let arr = []
    for (let j = 0; j < 3; j++) {
        arr.push(j)
    }
    answer.push(arr)
}