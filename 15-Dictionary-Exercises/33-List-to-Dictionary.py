person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]

# solution 1
answer = {thing[0]:thing[1] for thing in person}

# solution 2
answer = {k:v for k,v in person}

# solution 3
answer = dict(person)