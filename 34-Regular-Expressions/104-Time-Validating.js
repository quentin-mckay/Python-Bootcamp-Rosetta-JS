function isValidTime(str) {
    return /^\d{1,2}:\d{2}$/.test(str)
}


// ===== tests =====
console.log(isValidTime('10:45'))
console.log(isValidTime('1:45'))
console.log(isValidTime('1999'))
console.log(isValidTime('it is 10:45'))