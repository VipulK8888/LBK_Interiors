const fs = require('fs');

const html = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('hero3d') || l.includes('ZONE') || l.includes('telemetry') || l.includes('hud') || l.includes('SCROLL TO FLY') || l.includes('scrollytelling') || l.includes('id="gl"') || l.includes('id="hud"') || l.includes('id="nav"')) {
    console.log(`HTML ${i+1}: ${l}`);
  }
});

const css = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css', 'utf8');
const cssLines = css.split('\n');
cssLines.forEach((l, i) => {
  if (l.includes('#hud') || l.includes('#nav') || l.includes('telemetry') || l.includes('instruction') || l.includes('#hint') || l.includes('.dot')) {
    console.log(`CSS ${i+1}: ${l}`);
  }
});
