smiley = '\U0001f600'

for num in range(1,11):
    print(smiley * num)


num = 1
while num < 11:
    print(smiley * num)
    num += 1


# === my solution to pyramid challenge ===
num_lines = input("Pyramid size? ") 
num_lines = int(num_lines)

for num in range(0, num_lines):
    num_spaces = num_lines - num - 1
    num_smileys = 1 + (num * 2)
    print(num_spaces * ' ' + num_smileys * smiley)