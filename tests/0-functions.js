// or lodash random()
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// or lodash sample()
function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}