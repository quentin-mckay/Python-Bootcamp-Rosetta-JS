// custom randint function
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let x = randint(-100, 100)
while (x === 0) {
  x = randint(-100, 100)
}
let y = randint(-100, 100)
while (y === 0) {
  y = randint(-100, 100)
}

if (x > 0 && y > 0) { 
  console.log("both positive")
}
else if (x < 0 && y < 0) {
  console.log("both negative")
}
else if (x > 0 && y < 0) {
  console.log("x is positive and y is negative")
}
else {
  console.log("y is positive and x is negative")
}