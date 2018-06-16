from random import shuffle

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        suits = ('Hearts', 'Diamonds', 'Clubs', 'Spades')
        values = ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')

        # initialize list of 52 Cards
        
        # nested for loop way
        # self.cards = []
        # for suit in suits:
        #     for value in values:
        #         self.cards.append(Card(suit, value))

        # list comprehension way
        self.cards = [Card(value, suit) for value in values for suit in suits]

    def __repr__(self):
        return f"Deck of {self.count()} cards"

    def count(self):
        return len(self.cards)

    def shuffle(self):
        if self.count() < 52:
            raise ValueError("Only full decks can be shuffled")

        shuffle(self.cards)
        return self
    
    def _deal(self, num):
        if self.count() == 0:
            raise ValueError("All cards have been dealt")

        # get whichever is smaller    
        actual = min([self.count(), num])

        # remove a slice of cards from the end
        cards = self.cards[-actual:]

        # update self.cards
        self.cards = self.cards[:-actual]
        
        return cards

    def deal_card(self):
        return self._deal(1)[0]  # get single value from the list

    def deal_hand(self, num):
        return self._deal(num)
