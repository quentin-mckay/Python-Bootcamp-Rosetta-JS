def sum_floats(*args):
    return sum(num for num in args if type(num) == float)



# === tests ===
print(sum_floats(1.5, 2.4, 'awesome', [], 1))
print(sum_floats(1,2,3,4,5))