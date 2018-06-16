function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let actuallySick = choice([true, false])
let kindaSick = choice([true, false])
let hateYourJob = choice([true, false])
let sickDays = randint(0, 10)

let callingInSick = null

if (actuallySick && sickDays > 0) {
  callingInSick = true
}
else if (kindaSick && hateYourJob && sickDays > 0) {
  callingInSick = true
}
else {
  callingInSick = false
}