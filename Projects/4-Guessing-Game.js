const prompt = require('prompt-sync')()
const random = require('lodash/random')

let secretNumber = random(1, 10)

while (true) {
    let guess = Number(prompt("Pick a number between 1 and 10: "))

    if (guess < secretNumber) {
        console.log("Too low, try again!")
    } else if (guess > secretNumber) {
        console.log("Too high, try again!")
    } else {                                        
        console.log("You guessed it! You won!")

        let playAgain = prompt("Do you want to play again? (y/n) ")
        if (playAgain === 'y') {
            secretNumber = random(1, 10)
        } else {
            console.log("Thank you for playing!")
            break
        }
    }
}
