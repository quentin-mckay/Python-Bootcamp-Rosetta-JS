// === vanilla ===
// function generateEvens() {
//     // create array [1, 2, ..., 50]
//     let range = Array.from(Array(49).keys(), x => x + 1)
//     // only keep the even ones
//     return range.filter(x => x % 2 === 0)
// }


// === using lodash ===
const range = require('lodash/range')

function generateEvens() {
    return range(2, 50, 2)
}
