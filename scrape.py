import urllib.request
import re
import json

def scrape():
    with open('page.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    blocks = html.split('<div class="klb-product')[1:]
    products = []
    
    for block in blocks:
        # Title
        title_match = re.search(r'<div class="product-text"><h4><a[^>]*>(.*?)</a></h4>', block)
        title = title_match.group(1).replace('&#8211;', '-').strip() if title_match else ""
        
        # Image
        img_match = re.search(r'<img[^>]+src="([^">]+)"', block)
        img = img_match.group(1) if img_match else ""
        
        if title and 'coming soon' not in title.lower():
            p_id = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
            
            # Download image to public/images/
            img_filename = f"{p_id}.jpg"
            if img:
                try:
                    img_req = urllib.request.Request(img, headers={'User-Agent': 'Mozilla/5.0'})
                    with open(f"public/images/{img_filename}", "wb") as f:
                        f.write(urllib.request.urlopen(img_req).read())
                    img_path = f"/images/{img_filename}"
                except Exception as e:
                    print(f"Failed to download image {img}: {e}")
                    img_path = img
            else:
                img_path = ""
                
            products.append({
                "id": p_id,
                "name": title,
                "image": img_path,
                "category": "Pharmaceuticals",
                "description": "High-quality pharmaceutical product from Novarix Healthcare."
            })
            
    with open("scraped_products.json", "w") as f:
        json.dump(products, f, indent=2)
    print(json.dumps(products, indent=2))

import os
if not os.path.exists("public/images"):
    os.makedirs("public/images")
scrape()
