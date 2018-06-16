function maxMagnitude(arr) {
    return Math.max(...arr.map(n => Math.abs(n)))
}



// === tests ===
let list = [300, 20, -900]
console.log(maxMagnitude(list))