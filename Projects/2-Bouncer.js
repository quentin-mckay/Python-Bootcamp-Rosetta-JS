const prompt = require('prompt-sync')()

let age = prompt("How old are you? ")

// When comparing a string with a number, js will convert the string to a number
if (age) {
  if (age >= 21) {
    console.log("You are good to enter and can drink!")
  }
  else if (age >= 18) {
    console.log("You can enter, but need a wristband!")
  }
  else {
    console.log("You can't come in little one! :(")
  }
}
else {
  console.log("Please enter an age!")
}