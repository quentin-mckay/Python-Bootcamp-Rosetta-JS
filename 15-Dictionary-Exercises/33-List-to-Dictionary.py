person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]


answer = {thing[0]:thing[1] for thing in person}

answer = {k:v for k,v in person}

answer = dict(person)