const random = require('lodash/random')

let number = 0
let i = 0

while (number != 5) {
    number = random(1,10)
    i += 1
}

