// === vanilla js ===
function partition(list, fn) {
    let trues = []
    let falses = []

    for (let val of list) {
        if (fn(val)) {
            trues.push(val)
        } else {
            falses.push(val)
        }
    }

    return [trues, falses]
}


// === using lodash ===
const partition = require('lodash/partition')
