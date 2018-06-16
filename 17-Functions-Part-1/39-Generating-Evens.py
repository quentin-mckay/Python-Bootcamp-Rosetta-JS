def generate_evens():
    return list(range(2, 50, 2))

# or using list comprehension
def generate_evens():
    return [x for x in range(1,50) if x % 2 == 0]
