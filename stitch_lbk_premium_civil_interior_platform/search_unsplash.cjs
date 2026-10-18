const https = require('https');

function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=15`;
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log(`Results for "${query}":`, json.results ? json.results.length : 0);
        if (json.results) {
          json.results.slice(0, 8).forEach(r => {
            console.log(r.id, r.alt_description, r.urls.regular);
          });
        }
      } catch (e) {
        console.error('Parse error:', e.message);
      }
    });
  }).on('error', err => console.error('Error:', err.message));
}

searchUnsplash('luxury marble living room villa');
