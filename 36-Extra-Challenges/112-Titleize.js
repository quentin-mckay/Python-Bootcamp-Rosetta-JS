const titleize = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

    
    
console.log(titleize('this is awesome'))
console.log(titleize('oNLy cAPITALIZe fIRSt'))