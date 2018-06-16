def is_all_strings(lst):
    return all(type(item) == str for item in lst)



# === tests ===
print(is_all_strings(['a', 'b', 'c']))
print(is_all_strings([2, 'a', 'b', 'c']))
