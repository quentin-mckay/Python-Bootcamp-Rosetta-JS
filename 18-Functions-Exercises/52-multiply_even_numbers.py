def multiply_even_numbers(lst):
    total = 1
    for val in lst:
        if val % 2 == 0:
            total *= val
    return total