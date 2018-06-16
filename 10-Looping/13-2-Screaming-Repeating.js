const prompt = require('prompt-sync')()
const range = require('lodash/range')

let times = prompt("How many times do I have to tell you? ")

times = Number(times)

for (time of range(times)) {
  console.log(`time ${time+1}: CLEAN UP YOUR ROOM!`)
}

