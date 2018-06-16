const prompt = require('prompt-sync')()
const axios = require('axios')
const figlet = require('figlet')
const chalk = require('chalk')
const sample = require('lodash/sample')

const url = "https://icanhazdadjoke.com/search"

console.log(chalk.magenta(figlet.textSync("Dad Joke 3000")))

const topic = prompt("Let me tell you a joke! Give me a topic: ")

axios.get(url, {
    headers: { "Accept": "application/json" },
    params: { term: topic }
})
.then(response => {
    const numJokes = response.data.total_jokes
    const jokes = response.data.results

    if (numJokes === 0) {
        console.log(`Sorry I don't have any jokes about ${topic}! Please try again.`)
    }
    else if (numJokes === 1) {
        console.log(`I've got one joke about ${topic}. Here it is:`)
        const joke = jokes[0].joke
        console.log(joke)
    }
    else {
        console.log(`I've got ${numJokes} jokes about ${topic}. Here's one:`)
        const joke = sample(jokes).joke
        console.log(joke)
    }
})
