function isAllStrings(list) {
    return list.every(item => typeof item === 'string')
}



// === tests ===
console.log(isAllStrings(['a', 'b', 'c']))
console.log(isAllStrings([2, 'a', 'b', 'c']))