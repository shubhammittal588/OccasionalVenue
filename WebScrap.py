import requests
from bs4 import BeautifulSoup

res = requests.get('https://top5emailmarketingservices.com/main/')
soup = BeautifulSoup(res.text, 'lxml')
title = soup.find_all('div', class_='center-table')
print(title)