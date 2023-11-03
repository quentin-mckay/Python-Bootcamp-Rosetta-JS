const myIncludes = (collection, searchValue, startIndex=0) => {
    if (typeof collection === 'string' || Array.isArray(collection)) {
        return collection.slice(startIndex).includes(searchValue)
    }
    else {
        return Object.values(collection).includes(searchValue)
    }
}


console.log(myIncludes([1, 2, 3], 1)) // True 
console.log(myIncludes([1, 2, 3], 1, 2)) // False 
console.log(myIncludes({ 'a': 1, 'b': 2 }, 1)) // True 
console.log(myIncludes({ 'a': 1, 'b': 2 }, 'a')) // False
console.log(myIncludes('abcd', 'b')) // True
console.log(myIncludes('abcd', 'e')) // False