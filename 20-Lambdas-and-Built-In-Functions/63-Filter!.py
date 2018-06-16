def remove_negatives(nums):
    return list(filter(lambda n: n >= 0, nums))

# === tests ===
print(remove_negatives([-1, 3, 4, -99]))
print(remove_negatives([-7, 0, 1, 2, 3, 4, 5]))