const http = require('http');
const fs = require('fs');

http.get('http://localhost:4173/slabs/slab_01.jpg', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Content-Length:', res.headers['content-length']);
  console.log('Last-Modified:', res.headers['last-modified']);
  console.log('ETag:', res.headers['etag']);
});
