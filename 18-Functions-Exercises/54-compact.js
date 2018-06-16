function compact(list) {
    return list.filter(val => val)
}


// console.log(compact([0,1,2,"",[], null, "All done"]))
// only difference is [] is truthy in JS