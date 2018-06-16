// === first way ===
function speak(animal='dog') {
    let noise
    switch (animal) {
        case 'dog':
            noise = 'woof'
            break
        case 'pig':
            noise = 'oink'
            break
        case 'duck':
            noise = 'oink'
            break
        case 'cat':
            noise = 'meow'
            break
        default:
            noise = '?'
    }
    return noise
}

// === second way ===
function speak2(animal='dog') {
    const noises = {
        dog: 'woof',
        pig: 'oink',
        duck: 'quack',
        cat: 'moew'
    }
    return noises[animal] || '?'
}
