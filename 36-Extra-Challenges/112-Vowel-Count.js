const vowelCount = (str) => {
    let totals = {}
    str.toLowerCase().split('').forEach(letter => {
        if ('aeiou'.includes(letter)) {
            totals[letter] = totals[letter] + 1 || 1
        }
    })
    return totals
}

let s = "hello"
// s.split('').forEach(c => console.log(c))


console.log(vowelCount('awesome')) 
console.log(vowelCount('Elie')) 
console.log(vowelCount('Colt')) 