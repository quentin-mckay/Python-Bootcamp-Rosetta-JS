from csv import reader

def print_users():
    with open('users.csv') as file:
        csv_reader = reader(file)
        for row in csv_reader:
            print(f"{row[0]} {row[1]}")


print_users()