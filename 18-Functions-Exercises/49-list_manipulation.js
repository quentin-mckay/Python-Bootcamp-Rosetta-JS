function listManipulation(arr, cmd, loc, val) {
    if (cmd === 'remove') {
        if (loc === 'end') return arr.pop()
        if (loc === 'beginning') return arr.shift()
    }
    if(cmd === 'add') {
        if (loc === 'beginning') {
            arr.unshift(val)
            return arr
        }
        if (loc === 'end') {
            arr.push(val)
            return arr
        }
    }
}
