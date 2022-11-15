// using npm library prompt-sync
const prompt = require('prompt-sync')()

// custom choice function
function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

let playerWins = 0
let computerWins = 0
const winningScore = 3

while (playerWins < winningScore && computerWins < winningScore) {
    console.log(`Player score: ${playerWins} | Computer score: ${computerWins}`)
    console.log('...rock...')
    console.log('...paper...')
    console.log('...scissors...')


    let player = prompt("(Enter your choice): ").toLowerCase()
    if (player === 'quit' || player === 'q') { break }
    
    let computer = choice(['rock', 'paper', 'scissors'])
    console.log(`The computer plays ${computer}`)

    let message = ""

    if (player === computer) {
        message = "It's a tie!"
    }
    else if (player === 'rock') {
        if (computer === 'scissors') {
            message = 'Player wins!'
            playerWins += 1
        } else {
            message = 'Computer wins :('
            computerWins += 1
        }
    }
    else if (player === 'paper') {
        if (computer === 'rock') {
            message = 'Player wins!'
            playerWins += 1
        } else {
            message = 'Computer wins :('
            computerWins += 1
        }
    }
    else if (player === 'scissors') {
        if (computer === 'paper') {
            message = 'Player wins!'
            playerWins += 1
        } else {
            message = 'Computer wins :('
            computerWins += 1
        }
    }
    else {
        message = 'Please enter a valid move'
    }
    console.log(message)
}

if (playerWins > computerWins) {
    console.log("CONGRATS, YOU WON!")
} else if (playerWins === computerWins) {
    console.log("IT'S A TIE")
} else {
    console.log("OH NO :( THE COMPUTER WON...")
}