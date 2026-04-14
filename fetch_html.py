import urllib.request
url = "https://novarixhealthcare.com/shop-2/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
with open("page.html", "w") as f:
    f.write(html)
