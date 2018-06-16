// using "class" keyword
class Chicken {
    constructor(name, species) {
        this.name = name
        this.species = species
        this.eggs = 0
    }

    layEgg() {
        Chicken.totalEggs += 1
        this.eggs += 1
        return this.eggs
    }
}
Chicken.totalEggs = 0


// === tests ===
let c1 = new Chicken("Alice", "Partridge")
let c2 = new Chicken("James", "Speckled")
console.log(Chicken.totalEggs)
c1.layEgg()
c2.layEgg()
console.log(Chicken.totalEggs)