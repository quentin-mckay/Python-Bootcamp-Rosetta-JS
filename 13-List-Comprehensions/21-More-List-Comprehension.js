let list1 = [1,2,3,4]
let list2 = [3,4,5,6]

// ===== part 1 =====

// using vanilla
let answer = list1.filter(item => list2.includes(item))


// using lodash
const intersection = require('lodash/intersection')

let answer = intersection(list1, list2)


// ===== part 2 =====
let teachers = ["Elie", "Tim", "Matt"]

function reverse(str) {
    return str.split('').reverse().join('')
}

let answer2 = teachers.map(teacher => reverse(teacher).toLowerCase())
