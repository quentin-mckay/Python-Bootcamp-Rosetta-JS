def list_manipulation(lst, cmd, loc, val=None):
    if cmd == 'remove':
        if loc == 'end':
            return lst.pop()
        elif loc == 'beginning':
            return lst.pop(0)
    elif cmd == 'add':
        if loc == 'beginning':
            lst.insert(0, val)
            return lst
        elif loc == 'end':
            lst.append(val)
            return lst


