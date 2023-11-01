# def vowel_count(string):
#     totals = {}
#     for letter in string.lower():
#         if letter in 'aeiou':
#             totals[letter] = totals.get(letter, 0) + 1
#     return totals


def vowel_count(string):
    lower_s = string.lower()
    return {letter: lower_s.count(letter) for letter in lower_s if letter in 'aeiou'}


# Testing
print(vowel_count('awesome')) # {'a': 1, 'e': 2, 'o': 1}
print(vowel_count('Elie')) # {'e': 2, 'i': 1}
print(vowel_count('Colt')) # {'o': 1}