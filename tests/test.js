const sev = (...args) => {
    return args.filter(n => n % 2 === 0).reduce((total, n) => total + n)
}

console.log(sev(1,2,3,4))