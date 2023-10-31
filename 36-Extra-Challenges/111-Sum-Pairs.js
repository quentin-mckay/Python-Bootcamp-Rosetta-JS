const sumPairs = (arr, sum) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // console.log(arr[i], arr[i+1])
        if (arr[i] + arr[i+1] === sum) {
            return [arr[i], arr[i+1]]
        }
    }
    return []
}

console.log(sumPairs([4,2,10,5,1], 6))
console.log(sumPairs([11,20,4,2,1,5], 100))