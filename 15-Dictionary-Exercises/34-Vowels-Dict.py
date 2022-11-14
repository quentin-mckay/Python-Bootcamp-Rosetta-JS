# using {}.fromkeys
answer = {}.fromkeys("aeiou", 0)

# using dictionary comprehension
answer = {char:0 for char in "aeiou"}