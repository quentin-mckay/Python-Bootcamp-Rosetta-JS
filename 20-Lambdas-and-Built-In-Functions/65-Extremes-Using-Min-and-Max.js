// strings are not iterable in js
// so extra steps are needed
// there is probably a quicker way
function extremes(input) {
    if (typeof input === 'string') {
        const arr = input.split('').map(c => c.charCodeAt(0))
        const max = Math.max(...arr)
        const min = Math.min(...arr)
        return [String.fromCharCode(min), String.fromCharCode(max)]
    } else {
        return [Math.min(...input), Math.max(...input)]
    }
}



// === tests ===
console.log(extremes([1,2,3,4,5]))
console.log(extremes("alcatraz"))

