# == using map ===
def extract_full_name(names):
    return list(map(lambda name: f"{name['first']} {name['last']}"), names)

# === using list comprehension ===
def extract_full_name(names):
    return [' '.join([name['first'], name['last']]) for name in names]


# === tests ===
names = [{'first': 'Elie', 'last': 'Schoppik'}, {'first': 'Colt', 'last': 'Steele'}]
print(extract_full_name(names))
