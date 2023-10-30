def sum_pairs(lst, sum):
    for i in range(len(lst) - 1):
        if lst[i] + lst[i+1] == sum:
            return [lst[i], lst[i+1]]
    return []
    
    
    
    
print(sum_pairs([4,2,10,5,1], 6)) # [4,2]
print(sum_pairs([11,20,4,2,1,5], 100)) # []