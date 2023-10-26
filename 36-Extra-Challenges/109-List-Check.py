def list_check(lst):
    return all(type(el) == list for el in lst)

# Testing
print(list_check([[],[1],[2,3], (1,2)])) # False
print(list_check([1, True, [],[1],[2,3]])) # False
print(list_check([[],[1],[2,3]])) # True