const https = require('https');
const fs = require('fs');

async function testFetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      console.log('Status:', res.statusCode, 'Headers:', res.headers['content-type']);
      resolve(res.statusCode);
    }).on('error', reject);
  });
}

testFetch('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')
  .then(() => console.log('Fetch test success'))
  .catch(err => console.error('Fetch test error:', err.message));
