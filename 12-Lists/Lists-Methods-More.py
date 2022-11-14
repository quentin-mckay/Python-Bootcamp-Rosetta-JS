instructors = []

# ===== Adding Items =====

# add one item
instructors.append('Jeff')

# add multiple items
instructors.extend(["Colt", "Blue", "Lisa"])

# insert at beginning
instructors.insert(0, 'Done')


# ===== Removing Items =====

# remove last
instructors.pop()

# remove first
instructors.pop(0)

# remove at index
instructors.pop(2)

# remove item (first occurence)
instructors.remove('Colt')


# ===== Other Methods =====

# find index of item
instructors.index('Lisa')



print(instructors)