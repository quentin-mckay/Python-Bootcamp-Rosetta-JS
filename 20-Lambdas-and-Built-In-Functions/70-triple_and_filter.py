# === using map and filter ===
def triple_and_filter(nums):
    return map(lambda n: n*3, filter(lambda n: n % 4 == 0, nums))

# === using list comprehension ===
def triple_and_filter(nums):
    return [n * 3 for n in nums if n % 4 == 0]

