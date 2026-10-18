const https = require('https');

function searchWiki(query) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
    https.get(url, { headers: { 'User-Agent': 'LBK-Interiors/1.0 (contact@lbk.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const results = pages.map(p => ({
            title: p.title,
            url: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].url : null,
            width: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].width : 0,
            height: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].height : 0
          })).filter(x => x.url && x.width > 1200);
          resolve(results);
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const queries = [
    'marble bathroom luxury',
    'marble villa interior',
    'palatial hall marble staircase',
    'statuario marble interior'
  ];
  for (const q of queries) {
    const res = await searchWiki(q);
    console.log(`=== Query: ${q} (${res.length} matches) ===`);
    res.slice(0, 3).forEach(r => console.log(r.title, `${r.width}x${r.height}`, r.url));
  }
}

run().catch(console.error);
