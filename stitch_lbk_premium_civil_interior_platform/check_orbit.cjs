const fs = require('fs');
const path = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/LBKOrbitAnimation_React_ThreeJS';
if (fs.existsSync(path)) {
  console.log(fs.readdirSync(path));
}
