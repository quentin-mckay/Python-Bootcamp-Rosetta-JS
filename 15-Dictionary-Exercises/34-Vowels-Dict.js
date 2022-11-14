// using reduce()
let answer = "aeiou".split('').reduce((obj, vowel) => {
    obj[vowel] = 0
    return obj
}, {})


// using forEach
let answer = {};
['a', 'e', 'i', 'o', 'u'].forEach(vowel => answer[vowel] = 0)