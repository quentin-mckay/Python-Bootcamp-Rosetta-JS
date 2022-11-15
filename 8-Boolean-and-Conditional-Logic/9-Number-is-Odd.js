// custom randint function
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const num = randint(1, 1000)

if (num % 2 === 1) {
  console.log('odd')
}
else {
  console.log('even')
}