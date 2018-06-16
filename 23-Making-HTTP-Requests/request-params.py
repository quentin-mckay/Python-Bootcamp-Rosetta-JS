import requests

url = "https://icanhazdadjoke.com/search"

response = requests.get(
    url,
    headers={"Accept": "application/json"},
    params={"term": "cat"}    
)

data = response.json()

print(data)
for joke_object in data['results']:
    print(joke_object['joke'])