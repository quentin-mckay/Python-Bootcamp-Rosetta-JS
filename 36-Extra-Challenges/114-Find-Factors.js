const findFactors = (input_num) => {
    let out = []
    for (let n = 1; n <= input_num; n++) {
        if (input_num % n === 0) {
            out.push(n)
        }
    }
    return out
}

console.log(findFactors(10))
console.log(findFactors(11))
console.log(findFactors(111))
console.log(findFactors(321421))