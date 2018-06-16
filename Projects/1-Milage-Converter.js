const readline = require('readline')
const _ = require('lodash')
const rl = readline.createInterface(process.stdin, process.stdout)

// vanilla js Math.round() doens't do precision so we have to write our own
// or could install lodash and use _.round() which does precision
function precisionRound(number, precision=0) {
  let factor = Math.pow(10, precision)  // converts 2 to 100,  3 to 1000, etc.
  return Math.round(number * factor) / factor  // move decimal place over (to use Math.round()), then move it back
}

rl.question('How many kilometers did you cycle today?\n', (answer) => {
  let kms = answer

  let miles = precisionRound(kms / 1.60934, 2)

  console.log(`Your ${kms}km ride was ${miles}mi`)
  
  rl.close()
})