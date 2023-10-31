def vowel_count(string):
    totals = {}
    for letter in string.lower():
        if letter in 'aeiou':
            totals[letter] = totals.get(letter, 0) + 1
    return totals


# Testing
print(vowel_count('awesome')) # {'a': 1, 'e': 2, 'o': 1}
print(vowel_count('Elie')) # {'e': 2, 'i': 1}
print(vowel_count('Colt')) # {'o': 1}