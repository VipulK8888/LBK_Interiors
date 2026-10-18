const fs = require('fs');

if (fs.existsSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/vercel.json')) {
  console.log('=== vercel.json ===');
  console.log(fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/vercel.json', 'utf8'));
}

if (fs.existsSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/.gitignore')) {
  console.log('=== .gitignore ===');
  console.log(fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/.gitignore', 'utf8'));
}

if (fs.existsSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public')) {
  console.log('=== public folder contents ===');
  console.log(fs.readdirSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public'));
  if (fs.existsSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public/slabs')) {
    console.log('public/slabs count:', fs.readdirSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public/slabs').length);
  }
  if (fs.existsSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public/tiles')) {
    console.log('public/tiles count:', fs.readdirSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/public/tiles').length);
  }
}
