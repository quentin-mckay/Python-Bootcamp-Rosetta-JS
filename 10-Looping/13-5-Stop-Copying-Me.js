const prompt = require('prompt-sync')()

let answer = prompt("How's it going? ")

while (answer != "stop copying me") {
    console.log(answer)
    answer = prompt()
}

console.log("UGH FINE YOU WIN")