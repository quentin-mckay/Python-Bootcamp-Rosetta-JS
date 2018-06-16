def is_palindrome(string):
    prepared = string.replace(' ', '').lower()
    return prepared == prepared[::-1]

