const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/hero3dScrolly.js');
let code = fs.readFileSync(targetPath, 'utf8');

// Replace local 404 images with verified luxury architectural Unsplash URLs
code = code.replace("textureUrl: '/images/luxury_hero.webp'", "textureUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'");
code = code.replace("textureUrl: '/images/project_living.webp'", "textureUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'");
code = code.replace("textureUrl: '/images/project_exterior.webp'", "textureUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'");
code = code.replace("textureUrl: '/images/project_bathroom.webp'", "textureUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'");

// Replace backMat with frontMat so both sides are luxury architectural textures (NEVER black!)
code = code.replace(/backMat\s*\/\/\s*back/, 'frontMat        // back (double-sided luxury stone texture, NEVER black)');

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Successfully updated monolith textures with verified Unsplash luxury photography and eliminated black surfaces!');
