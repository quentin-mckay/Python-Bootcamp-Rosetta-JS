// from https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb
const smiley = '\uD83D\uDE00'


// // === using lodash ===
const range = require('lodash/range')

range(1,11).forEach(num => {
    console.log(smiley.repeat(num))
})


// === vanilla for loop ===
for (let num = 1; num < 11; num++) {
    console.log(smiley.repeat(num))
}


// === while loop ===
let num = 1
while (num < 11) {
    console.log(smiley.repeat(num))
    num += 1
}


// === my solution to pyramid challenge ===
const prompt = require('prompt-sync')()

let numLines = prompt("Pyramid size? ")
numLines = Number(numLines)

for (let num = 0; num < numLines; num++) {
    let numSpaces = numLines - num - 1
    let numSmileys = num * 2 + 1
    let str = ' '.repeat(numSpaces) + smiley.repeat(numSmileys)
    console.log(str)
}