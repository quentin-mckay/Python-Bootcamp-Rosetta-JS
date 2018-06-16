let sounds = ["super", "cali", "fragil", "istic", "expi", "ali", "docious"]

// === using for ... of ===
let result = ''
for (let sound of sounds) {
    result += sound
}
result = result.toUpperCase()


// ===== using reduce() =====
let result = sounds.reduce((total, sound) => total + sound).toUpperCase()