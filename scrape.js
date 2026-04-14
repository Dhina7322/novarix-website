const fs = require('fs');

async function scrape() {
  try {
    const response = await fetch("https://novarixhealthcare.com/shop-2/");
    const html = await response.text();
    
    // Find all list items with class product
    const products = [];
    const productBlocks = html.split('<li class="product').slice(1);
    
    for (const block of productBlocks) {
      // Extract title: <h2 ...>CHYRIX &ndash; AP</h2>
      const titleMatch = block.match(/<h2[^>]*>(.*?)<\/h2>/);
      let title = titleMatch ? titleMatch[1].replace(/&ndash;/g, '-').trim() : "";
      
      // Extract image: <img ... src="https://novarixhealthcare.com/wp-content/uploads/..." ...>
      const imgMatch = block.match(/<img[^>]+src="([^">]+)"/);
      let img = imgMatch ? imgMatch[1] : "";
      
      // Extract link: <a href="https://...">...</a>
      const linkMatch = block.match(/<a href="([^">]+)"/);
      let link = linkMatch ? linkMatch[1] : "";

      if (title && !title.toLowerCase().includes('coming soon')) {
        products.push({
          id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
          name: title,
          image: img,
          category: 'Pharmaceuticals' // default
        });
      }
    }
    
    console.log(JSON.stringify(products, null, 2));
    fs.writeFileSync('scraped_products.json', JSON.stringify(products, null, 2));
    
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

scrape();
