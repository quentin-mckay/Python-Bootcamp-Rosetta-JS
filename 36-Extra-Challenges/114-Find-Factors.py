def find_factors(input_num):
    return [n for n in range(1, input_num + 1) if input_num % n == 0]


print(find_factors(10))
print(find_factors(11))
print(find_factors(111))
print(find_factors(321421))