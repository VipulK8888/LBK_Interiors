const fs = require('fs');
const path = require('path');

let html = fs.readFileSync(path.join('..', 'index.html'), 'utf8');

// 1. Remove opacity: 0 on reveal-section
html = html.replace(
  /\.reveal-section\s*\{[^}]*\}/g,
  '.reveal-section { opacity: 1 !important; transform: none !important; }'
);

// 2. Replace broken logo with bespoke gold emblem
const logoSvg = `<div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8C178] via-[#C5A15B] to-[#775A1B] flex items-center justify-center shadow-sm text-white font-serif font-bold text-sm tracking-widest shrink-0 border border-primary/30 select-none">LBK</div>`;

html = html.replace(
  /<img alt="LBK Brand Logo"[^>]*\/>/g,
  logoSvg
);

// 3. Ensure #stone-3d-viewport has height
html = html.replace(
  'id="stone-3d-viewport"',
  'id="stone-3d-viewport" style="min-height: 420px; height: 420px;"'
);

fs.writeFileSync(path.join('..', 'index.html'), html, 'utf8');
console.log('index.html patched with visible sections and luxury emblem logo!');
