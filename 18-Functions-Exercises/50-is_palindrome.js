function isPalindrome(string) {
    let prepared = string.replace(/\s+/g, '').toLowerCase()
    return prepared === prepared.split('').reverse().join('')
}
