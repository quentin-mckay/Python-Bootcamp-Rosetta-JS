// let answer = 'amazing'.split('').filter(char => !'aeiou'.includes(char))

// console.log(answer)

const range = require('lodash/range')

let answer = range(1, 101).filter(n => n % 12 === 0)

console.log(answer)