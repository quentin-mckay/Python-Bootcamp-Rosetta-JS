// write our own randint function
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const choice = randint(1, 10)

if (choice === 7) {
  console.log('lucky')
}
else {
  console.log('unlucky')
}