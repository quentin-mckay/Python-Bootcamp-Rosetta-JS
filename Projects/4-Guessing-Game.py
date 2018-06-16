from random import randint

secret = randint(1, 10)

while True:
    guess = int(input("Pick a number from 1 to 10: "))
    
    if guess < secret:
        print("Too low, try again!")
    elif guess > secret: 
        print("Too high, try again!")
    else:
        print("You guessed it! You won!")

        play_again = input("Do you want to play again? (y/n) ")
        if play_again == "y":
            secret = randint(1, 10)
        else:
            print("Thank you for playing!")
            break