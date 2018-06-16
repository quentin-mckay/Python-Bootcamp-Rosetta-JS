// === using lodash ===
const zip = require('lodash/zip')

function interleave(str1, str2) {
    const paired = zip(str1.split(''), str2.split(''))
    return paired.map(pair => pair.join('')).join('')
}


// === tests ===
console.log(interleave('hi', 'ha'))
console.log(interleave('aaa', 'zzz'))
console.log(interleave('lzr', 'iad'))
