function frequency(collection, searchTerm) {
    return collection.filter(item => item === searchTerm).length
}
