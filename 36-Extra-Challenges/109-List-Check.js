const arrayCheck = (arr) => {
	return arr.every(el => Array.isArray(el))
}

// Testing
console.log(arrayCheck([[],[1],[2,3], (1,2)]))
console.log(arrayCheck([1, True, [],[1],[2,3]]))
console.log(arrayCheck([[],[1],[2,3]]))