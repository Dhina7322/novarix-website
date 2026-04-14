import re

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

index = html.find('CHYRIX')
if index != -1:
    start = max(0, index - 1000)
    end = min(len(html), index + 100)
    print(html[start:end])
