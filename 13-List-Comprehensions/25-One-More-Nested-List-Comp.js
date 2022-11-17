// ===== using lodash =====
const range = require('lodash/range')

let answer = range(0, 10).map(n => range(0, 10))


// ===== using vanilla =====
let answer = [...Array(10).keys()].map(n => [...Array(10).keys()])


// using for loops
let answer = []
for (let i = 0; i < 10; i++) {
    let arr = []
    for (let j = 0; j < 10; j++) {
        arr.push(j)
    }
    answer.push(arr)
}