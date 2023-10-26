const reverseString = (str) => {
    return str.split('').reverse().join('')
}

// Testing
let x = 'hello'
let out = reverseString(x)
console.log(out)