// === using lodash and ES6 syntax ===
const countBy = require('lodash/countBy')

const multipleLetterCount = (string) => countBy(string)


// === vanilla ===
function multipleLetterCount(string) {
    const result = {}
    for (const char of string) {
        result[char] = ++result[char] || 1
    }
    return result
}