function divide(num1, num2) {
    try {
        return num1 / num2
    } 
    catch (err) {
        if (err instanceof TypeError) {
            console.log("Please provide two integers or floats")
        }
    }
}

console.log(divide(4,2))
console.log(divide('',2))  // this returns 0 ??  why?
console.log(divide([],2))  // this returns 0 ??  why?