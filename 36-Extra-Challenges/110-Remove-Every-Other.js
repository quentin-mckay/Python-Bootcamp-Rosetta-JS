
const removeEveryOther = (arr) => {
    return arr.filter((el, i) => i % 2 === 0)
}

console.log(removeEveryOther([1,2,3,4,5]))
console.log(removeEveryOther([5,1,2,4,1]))
console.log(removeEveryOther([1]))
// [1,2,3,4,5]))
// [5,1,2,4,1]))
// [1]))