
def remove_every_other(lst):
    return [el for i, el in enumerate(lst) if i % 2 == 0]


print(remove_every_other([1,2,3,4,5]))
print(remove_every_other([5,1,2,4,1]))
print(remove_every_other([1]))