def partition(lst, fn):
    trues = []
    falses = []

    for val in lst:
        if fn(val):
            trues.append(val)
        else:
            falses.append(val)
    
    return [trues, falses]

