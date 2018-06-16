const sample = require('lodash/sample')

let food = sample(["cheese pizza", "quiche","morning bun","gummy bear","tea cake"])

let bakeryStock = {
    "almond croissant" : 12,
    "toffee cookie": 3,
    "morning bun": 1,
    "chocolate chunk cookie": 9,
    "tea cake": 25
}

// first way
if (bakeryStock[food]) {
    console.log(`${bakeryStock[food]} left`)
} else {
    console.log("We don't make that")
}


// second way
let quantity = bakeryStock[food]
if (quantity) {
    console.log(`${quantity} left`)
} else {
    console.log("We don't make that")
}