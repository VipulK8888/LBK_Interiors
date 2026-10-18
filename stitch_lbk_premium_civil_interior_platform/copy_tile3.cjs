const fs = require('fs');
const src = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e/tile_03_topdown_1792349334844.jpg';
const dest = '../public/tiles/tile_03.jpg';
fs.copyFileSync(src, dest);
console.log('Copied tile_03.jpg, size:', fs.statSync(dest).size);
