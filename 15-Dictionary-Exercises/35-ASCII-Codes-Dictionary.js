// vanilla
let answer = {}
for (let num = 65; num <= 90; num++) {
    answer[num] = String.fromCharCode(num)
}

// using lodash + reduce
const range = require('lodash/range')

let answer = range(65, 91).reduce((obj, num) => {
    obj[num] = String.fromCharCode(num)
    return obj
},{})