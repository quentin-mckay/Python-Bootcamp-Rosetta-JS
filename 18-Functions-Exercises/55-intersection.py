# using list comprehension
def intersection(list1, list_2):
    return [val for val in list1 if val in list2]

# using set and &
def intersection(list1, list2):
    return list(set(list1) & set(list2))


# print(intersection([1,2,3], [2,3,4]))