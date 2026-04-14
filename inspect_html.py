import re

with open('page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find occurrences of CHYRIX
index = html.find('CHYRIX')
if index != -1:
    start = max(0, index - 200)
    end = min(len(html), index + 500)
    print("--- SNIPPET ---")
    print(html[start:end])
    print("---------------")
