function extractFullName(names) {
    return names.map(name => `${name['first']} ${name['last']}`)
}


// === tests ===
let names = [{'first': 'Elie', 'last': 'Schoppik'}, {'first': 'Colt', 'last': 'Steele'}]
console.log(extractFullName(names))