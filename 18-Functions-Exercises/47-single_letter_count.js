// === using regular expression ===
function singleLetterCount(string, letter) {
    const result = string.match(new RegExp(letter, 'gi'))
    if (result) return result.length
    return 0
}

// === using lodash ===
const sumBy = require('lodash/sumBy')

function singleLetterCount(string, letter) {
    return sumBy(string.toLowerCase(), char => char === letter.toLowerCase())
}
