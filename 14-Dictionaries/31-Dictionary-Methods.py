inventory = {'croissant': 19, 'bagel': 4, 'muffin': 8, 'cake': 1}

# make a copy
stock_list = inventory.copy()

# create new key/value pair
stock_list['cookie'] = 18

# remove key
stock_list.pop('cake')