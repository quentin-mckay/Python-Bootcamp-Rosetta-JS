// === using lodash ===
const range = require('lodash/range')

let state = ''

range(1, 21).forEach(num => {
    if (num === 4 || num === 13) {
        state = 'unlucky'
    } else if (num % 2 === 0) {
        state = 'even'
    } else {
        state = 'odd'
    }
    
    console.log(`${num} is ${state}`)
})


// === using for loop ===
let state = ''

for (let num = 0; num < 21; num++) {
    if (num === 4 || num === 13) {
        state = 'unlucky'
    } else if (num % 2 === 0) {
        state = 'even'
    } else {
        state = 'odd'
    }

    console.log(`${num} is ${state}`)
}
