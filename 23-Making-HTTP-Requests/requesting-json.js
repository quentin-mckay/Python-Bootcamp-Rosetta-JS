// ===== 1 =====
// in node using "request" package (default uses callbacks)
// first need to $npm install request
const request = require('request')

const url = "https://icanhazdadjoke.com"

request({ url, headers: { "Accept": "application/json" }}, (err, response, body) => {
    const data = JSON.parse(body)
    console.log(data.joke)
    console.log(`status: ${data.status}`)
})

// ===== 2 =====
// in node using "node-fetch" package
// first need to $ npm install node-fetch
const fetch = require('node-fetch')

const url = "https://icanhazdadjoke.com"

fetch(url, { headers: { "Accept": "application/json" } })
    .then(res => res.json())
    .then(data => {
        console.log(data.joke)
        console.log(`status: ${data.status}`)
    })


// ===== 3 =====
// in the browser using native fetch
const url = "https://icanhazdadjoke.com"

fetch(url, { headers: { "Accept": "application/json" } })
    .then(res => res.json())
    .then(data => {
        console.log(data.joke)
        console.log(`status: ${data.status}`)
    })


// ===== 4 =====
// using "axios" package (same in browser AND node)
// first need need to $ npm install axios
const axios = require('axios')

const url = "https://icanhazdadjoke.com"

axios.get(url, { headers: { "Accept": "application/json" } })
    .then(response => {
        console.log(response.data.joke)
        // console.log(data.joke)
        console.log(`status: ${response.data.status}`)
    })