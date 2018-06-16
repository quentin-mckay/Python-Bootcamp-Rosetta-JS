# === first way ===
def speak(animal='dog'):
    if animal == 'dog':
        return 'woof'
    elif animal == 'pig':
        return 'oink'
    elif animal == 'duck':
        return 'quack'
    elif animal == 'cat':
        return 'meow'
    else:
        return '?'

# === second way ===
def speak(animal='dog'):
    noises = {
        'dog': 'woof',
        'pig': 'oink',
        'duck': 'quack',
        'cat': 'meow',
    }
    return noises.get(animal, '?')  # returns '?' if no animal is found
