let person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]


// using reduce() and ES6 Destructuring
let answer = person.reduce((obj, [key, value]) => {
    obj[key] = value
    return obj
},{})

