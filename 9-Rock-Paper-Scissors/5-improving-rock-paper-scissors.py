from random import randint

player_wins = 0
computer_wins = 0

while player_wins < 2 and computer_wins < 2:

    print(f"Player score: {player_wins} | Computer score: {computer_wins}")
    print('...rock...')
    print('...paper...')
    print('...scissors...')


    player = input("(Enter your choice): ").lower()
    if player == "quit" or player == "q":
        break


    rand_num = randint(0,2)
    if rand_num == 0:
        computer = "rock"
    elif rand_num == 1:
        computer = "paper"
    else:
        computer = "scissors"


    print(f"The computer plays {computer}")


    if player == computer:
        print("It's a tie.")
    elif player == "rock":
        if computer == "scissors":
            print("Player wins!")
            player_wins += 1
        else:
            print("Computer wins :(")
            computer_wins += 1
    elif player == "paper":
        if computer == "rock":
            print("Player wins!")
            player_wins += 1
        else:
            print("Computer wins :(")
            computer_wins += 1
    elif player == "scissors":
        if computer == "paper":
            print("Player wins!")
            player_wins += 1
        else:
            print("Computer wins :(")
            computer_wins += 1
    else:
        print("Something went wrong")

if player_wins > computer_wins:
    print("CONGRATS, YOU WON!")
elif player_wins == computer_wins:
    print("IT'S A TIE")
else:
    print("OH NO :( THE COMPUTER WON...")

    