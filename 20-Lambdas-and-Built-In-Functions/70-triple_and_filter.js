function tripleAndFilter(nums) {
    return nums.filter(n => n % 4 === 0).map(n => n * 3)
}


// === tests ===
console.log(tripleAndFilter([1,2,3,4]))
console.log(tripleAndFilter([6,8,10,12]))