import requests

url = "https://icanhazdadjoke.com"

response = requests.get(url, headers={"Accept": "application/json"})

print(f"your request to {url} came back w/ status code {response.status_code}")

data = response.json()

print(data['joke'])
print(f"status: {data['status']}")


