function combineWords(word, options = {}) {
    if (options.prefix) {
        return options.prefix + word
    } else if (options.suffix) {
        return word + options.suffix
    } else {
        return word
    }
}

// === using destructuring ===
function combineWords(word, {prefix, suffix} = {}) {
    if (prefix) return prefix + word
    else if (suffix) return word + suffix
    else return word
}

// === tests ===
// console.log(combineWords('child'))w
// console.log(combineWords('child', {prefix: 'man'}))
// console.log(combineWords('child', {suffix: 'ish'}))
// console.log(combineWords('work', {suffix: 'er'}))