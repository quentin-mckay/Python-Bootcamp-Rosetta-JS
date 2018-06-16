def decrement_list(nums):
    return list(map(lambda n: n - 1, nums))


# === tests ===
print(decrement_list([1, 2, 3]))
print(decrement_list([20, 14, 11]))