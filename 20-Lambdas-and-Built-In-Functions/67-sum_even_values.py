def sum_even_values(*args):
    return sum(n for n in args if n % 2 == 0)


print(sum_even_values(1,3,5))