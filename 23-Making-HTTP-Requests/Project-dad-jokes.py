from pyfiglet import figlet_format
from termcolor import colored
import requests
from random import choice

url = "https://icanhazdadjoke.com/search"


ascii_art = figlet_format("Dad Joke 3000")
colored_ascii = colored(ascii_art, color="magenta")
print(colored_ascii)

topic = input("Let me tell you a joke! Give me a topic: ")

response = requests.get(
    url,
    headers={ "Accept": "application/json" },
    params={"term": topic}
)

data = response.json()

jokes = data['results']
num_jokes = data['total_jokes']

if num_jokes == 0:
    print(f"Sorry I don't have any jokes about {topic}! Please try again.")
elif num_jokes == 1:
    print(f"I've got one joke about {topic}. Here it is:")
    joke = jokes[0]['joke']
    print(joke)
else:
    msg = f"I've got {num_jokes} jokes about {topic}. Here's one:"
    joke = choice(jokes)['joke']
    print(joke)