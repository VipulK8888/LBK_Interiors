const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The problematic snippet has double closing div after outro:
// <div class="cap" id="outro">
//   <h2>Turnkey luxury interiors</h2>
// </div>
// </div>
// 
// <div class="pill" id="floorTag"></div>

const searchTarget = `<div class="cap" id="outro">
              <h2>Turnkey luxury interiors</h2>
            </div>
            </div>`;

const replaceTarget = `<div class="cap" id="outro">
              <h2>Turnkey luxury interiors</h2>
            </div>`;

if (html.includes(searchTarget)) {
  html = html.replace(searchTarget, replaceTarget);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully removed extra closing div! #stage now properly wraps #floorTag and #activeVillaPill');
} else {
  console.log('Search target not found verbatim, checking regex...');
  html = html.replace(/<div class="cap" id="outro">\s*<h2>Turnkey luxury interiors<\/h2>\s*<\/div>\s*<\/div>/, replaceTarget);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Regex replaced extra closing div!');
}
