const shuffle = require('lodash/shuffle')

class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
    }

    // changes "console.log" representation
    inspect() {
        return `${this.value} of ${this.suit}`
    }
}

class Deck {
    constructor() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

        this.cards = []
        suits.forEach(suit => {
            values.forEach(value => {
                this.cards.push(new Card(value, suit))
            })
        })
    }

    inspect() {
        return `Deck of ${this.count()} cards`
    }

    count() {
        return this.cards.length
    }

    shuffle() {
        if (this.count() < 52) throw Error("Only full decks can be shuffled")

        this.cards = shuffle(this.cards)
        return this.cards
    }

    _deal(num) {
        if (this.count() === 0) throw Error("All cards have been dealt")
        // or...  (not sure which is better)
        // if (this.count() === 0) throw { name: "ValueError", message: "All cards have been dealt" }

        const actualNum = Math.min(this.count(), num)

        // "splice" changes the array and returns deleted items (perfect!)
        // removes actualNum cards from end of "this.cards" and returns array of removed cards
        return this.cards.splice(-actualNum, actualNum)
    }

    dealCard() {
        return this._deal(1)[0]
    }

    dealHand(num) {
        return this._deal(num)
    }
}


// === tests ===
let d = new Deck()
d.shuffle()

let card = d.dealCard()
console.log(card)

let hand = d.dealHand(5)
console.log(hand)

d.dealHand(46) // deal the rest of the deck
d.dealCard() // test Error