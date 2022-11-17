// let answer = 'amazing'.split('').filter(char => !'aeiou'.includes(char))

// console.log(answer)

const range = require('lodash/range')

person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]

let answer = {}
person.forEach(prop => answer[prop[0]] = prop[1])

console.log(answer)