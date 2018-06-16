def interleave(str1, str2):
    return ''.join([''.join(pair) for pair in zip(str1, str2)])


