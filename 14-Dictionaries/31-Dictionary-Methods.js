let inventory = {'croissant': 19, 'bagel': 4, 'muffin': 8, 'cake': 1}


// create copy (vanilla)
let stockList = Object.assign({}, inventory)

// create copy (lodah)
const clone = require('lodash/clone')
let stockList = clone(inventory)


// add new key value pair
stockList.cookie = 18
// or
stockList['cookie'] = 18


// remove property (vanilla)
// delete stockList['cake']

// remove property (lodash)
const unset = require('lodash/unset')
unset(stockList, 'cake')
