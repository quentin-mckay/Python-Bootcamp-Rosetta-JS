// js doesn't have **kwargs equivalent
function calculate({operation='add', first=0, second=0, message="The result is "}) {
    const lookup = {
        add: (a,b) => a + b,
        subtract: (a,b) => a - b,
        multiply: (a,b) => a * b,
        divide: (a,b) => a / b 
    }
    const fn = lookup[operation]
    const result = fn(first, second) 
    return message + result
}

// === test ===
// console.log(calculate({first: 3, second: 2, operation: 'multiply', message: "Final score is "}))
