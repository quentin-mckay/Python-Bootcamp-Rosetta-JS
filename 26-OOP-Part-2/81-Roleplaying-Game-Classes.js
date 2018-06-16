// using ES6 "class" keyword
class Character {
    constructor(name, hp, level) {
        this.name = name
        this.hp = hp
        this.level = level
    }
}

class NPC extends Character {
    constructor(name, hp, level) {
        super(name, hp, level)
    }

    speak() {
        console.log(`${this.name} says: Look out for monsters!`)
    }
}

// using prototype-based inheritance
function Character(name, hp, level) {
    this.name = name
    this.hp = hp
    this.level = level
}

function NPC(...args) {
    Character.apply(this, args)
}

NPC.prototype.speak = function() {
    console.log(`${this.name} says: Look out for monsters!`)
}


// === tests ===
let villager = new NPC("Bob", 100, 12)
console.log(villager.name)
villager.speak()