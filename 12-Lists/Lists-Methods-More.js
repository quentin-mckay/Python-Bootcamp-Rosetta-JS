let instructors = []


// ===== Adding Items =====

// add one item
instructors.push('Jeff')

// add multiple items
instructors.push("Colt", "Blue", "Lisa")

newArray = ['John', 'Sarah']
instructors.push(...newArray)

// insert at beginning
instructors.unshift("First")
instructors.splice(0, 0, "First")  // (index, deleteCount, items)


// ===== Removing Items =====

// remove last
instructors.pop()

// remove first
instructors.shift()

// remove at index
instructors.splice(2, 1)  // (index, deleteCount)

// remove item (first occurence)
instructors.splice(instructors.indexOf('Colt'), 1)


// ===== Other Methods =====

instructors.findIndex('Lisa')



console.log(instructors)