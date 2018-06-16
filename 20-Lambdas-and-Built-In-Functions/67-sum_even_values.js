function sumEvenValues(...args) {
    return args.filter(n => n % 2 === 0).reduce((sum, n) => sum + n ,0)
}


// === tests ===
console.log(sumEvenValues(1,2,3,4,5,6))
console.log(sumEvenValues(1,3,5)) 