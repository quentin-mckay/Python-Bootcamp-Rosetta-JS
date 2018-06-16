# part 1
list1 = [1,2,3,4]
list2 = [3,4,5,6]

answer = [item for item in list1 if item in list2]

# part 2
teachers = ["Elie", "Tim", "Matt"]

answer2 = [teacher[::-1].lower() for teacher in teachers]

print(answer2)