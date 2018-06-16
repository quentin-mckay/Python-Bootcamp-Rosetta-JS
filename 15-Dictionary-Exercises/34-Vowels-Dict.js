// using reduce()
let answer = "aeiou".split('').reduce((obj, letter) => {
    obj[letter] = 0
    return obj
}, {})