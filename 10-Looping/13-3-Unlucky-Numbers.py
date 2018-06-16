for x in range(1, 21):
    if x == 4 or x == 13:
        state = 'unlucky'
    elif x % 2:
        state = 'even'
    else:
        state = 'odd'
        
    print(f'{x} is {state}')