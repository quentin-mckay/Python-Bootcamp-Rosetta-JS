def multiple_letter_count(string):
    return {char:string.count(char) for char in string}

print(multiple_letter_count('hello'))