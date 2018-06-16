age = input('How old are you? ')

if age != "":
    age = int(age)
    if age >= 21:
        print("You are good to enter and can drink!")
    elif age >= 18:
        print("You can enter, but need a wristband!")
    else:
        print("You can't come in little one! :(")
else:
    print("Please enter an age!")