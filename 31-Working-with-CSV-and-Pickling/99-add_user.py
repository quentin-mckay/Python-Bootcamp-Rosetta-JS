from csv import writer

def add_user(first, last):
    with open('users.csv', 'a', newline='') as file:
        csv_writer = writer(file)
        csv_writer.writerow([first, last])


add_user('Quentin', 'McKay')
add_user('Laura', 'Caloia')
add_user('Azzi', 'McKay')
add_user('Spike', 'McKay')