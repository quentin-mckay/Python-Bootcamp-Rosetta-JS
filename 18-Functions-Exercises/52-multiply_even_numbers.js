function multiplyEvenNumbers(list) {
    return list.filter(num => num % 2 === 0).reduce((total, val) => total * val)
}