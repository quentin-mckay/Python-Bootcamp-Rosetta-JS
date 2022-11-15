// custom choice function
function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

let food = choice(['apple', 'grape', 'bacon', 'steak', 'worm', 'dirt'])

if (food === 'apple' || food === 'grape') {
  console.log('fruit')
}
else if (food === 'bacon' || food === 'steak') {
  console.log('meat')
}
else {
  console.log('yuck')
}
