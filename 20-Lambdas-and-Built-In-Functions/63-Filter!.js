function removeNegatives(nums) {
    return nums.filter(n => n >= 0)
}

// === tests ===
console.log(removeNegatives([-1, 3, 4, -99]))
console.log(removeNegatives([-7, 0, 1, 2, 3, 4, 5]))