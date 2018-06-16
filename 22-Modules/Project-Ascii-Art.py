from pyfiglet import figlet_format
from termcolor import colored

valid_colors = ('red', 'green', 'yellow', 'blue', 'magenta', 'cyan')

def print_art(msg, color):
    if color not in valid_colors:
        color = 'magenta'
    ascii_art = pyfiglet.figlet_format(msg)
    colored_ascii = colored(ascii_art, color)
    print(ascii_art)

msg = input("what message do you want to print? ")
color = input("what color? ")

print_art(msg, color)