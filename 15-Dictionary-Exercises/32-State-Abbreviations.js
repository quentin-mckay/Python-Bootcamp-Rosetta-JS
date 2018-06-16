let list1 = ["CA", "NJ", "RI"]
let list2 = ["California", "New Jersey", "Rhode Island"]

let answer = {}
list1.forEach((key, index) => answer[key] = list2[index])
