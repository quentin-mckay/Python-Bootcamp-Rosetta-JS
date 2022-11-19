import requests
from bs4 import BeautifulSoup
from csv import writer
# from pprint import pprint

response = requests.get('https://www.rithmschool.com/blog')

# pass in the raw HTML text 
# we don't put 'html.parser', it will still work
# but bs4 muddies the terminal with a complaint
soup = BeautifulSoup(response.text, 'html.parser')

# return a list of all <article> element
articles = soup.find_all('article')



with open('blog_data.csv', 'w', newline='') as csv_file:
    csv_writer = writer(csv_file)
    csv_writer.writerow(['title', 'link', 'date'])



    for article in articles:
        # .find just returns the first one it finds
        a = article.find('a')

        # like .innerText in JS
        title = a.get_text()

        # get the value of the href attribute
        # could also do a.attrs('href')
        # this is just a shorthand
        url = a['href']

        date = article.find('time')['datetime']

        csv_writer.writerow([title, url, date])