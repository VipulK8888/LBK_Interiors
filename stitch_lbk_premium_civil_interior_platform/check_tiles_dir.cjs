const fs = require('fs');
const path = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/Tiles';
if (fs.existsSync(path)) {
  console.log(fs.readdirSync(path));
}
