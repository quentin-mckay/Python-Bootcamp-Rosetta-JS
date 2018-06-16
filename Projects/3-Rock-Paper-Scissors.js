const prompt = require('prompt-sync')()

function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

let player = prompt("Player, make your move: ").toLowerCase()

let computer = choice(['rock', 'paper', 'scissors'])
console.log(`Computer plays ${computer}`)

let message = ""

if (player === computer) {
	message = "It's a tie!"
}
else if (player === 'rock') {
	message = computer === 'scissors' ? 'player wins!' : 'computer wins!'
}
else if (player === 'paper') {
	message = computer === 'rock' ? 'player wins!' : 'computer wins!'
}
else if (player === 'scissors') {
	message = computer === 'paper' ? 'player wins!' : 'computer wins!'
}
else {
	message = 'Something went wrong'
}

console.log(message)

