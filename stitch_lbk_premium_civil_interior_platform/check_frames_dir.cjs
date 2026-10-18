const fs = require('fs');
const path = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/web_design_2_frames';
if (fs.existsSync(path)) {
  console.log(fs.readdirSync(path));
} else {
  console.log('Does not exist');
}
