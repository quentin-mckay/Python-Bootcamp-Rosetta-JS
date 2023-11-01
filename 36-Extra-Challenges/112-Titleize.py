def titleize(string):
    word_list = string.split()
    titled = [word[0].upper() + word[1:] for word in word_list]
    return ' '.join(titled)

    
    
print(titleize('this is awesome'))
print(titleize('oNLy cAPITALIZe fIRSt'))