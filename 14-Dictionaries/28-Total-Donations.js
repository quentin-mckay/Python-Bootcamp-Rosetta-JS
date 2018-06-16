donations = {
    sam: 25.0, 
    lena: 88.99, 
    chuck: 13.0, 
    linus: 99.5, 
    stan: 150.0, 
    lisa: 50.25, 
    harrison: 10.0
}


// using Object.values and reduce()
let total_donations = Object.values(donations).reduce((total, val) => total + val, 0)


// using for .. in
let total_donations = 0
for (let key in donations) {
    total_donations += donations[key]
}