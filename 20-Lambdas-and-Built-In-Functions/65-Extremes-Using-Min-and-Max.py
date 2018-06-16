def extremes(lst):
    return min(lst), max(lst)



# === tests ===
print(extremes([1,2,3,4,5]))
print(extremes("alcatraz"))

print(type(extremes("alcatraz")))