// === using vanilla ===
function intersection(list1, list2) {
    return list1.filter(val => list2.includes(val))
}


// === using lodash ===
const intersection = require('lodash/intersection')



// console.log(intersection([1,2,3], [2,3,4]))