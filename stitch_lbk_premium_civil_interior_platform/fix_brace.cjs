const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/js/coverflow3d.js');
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(
`    } else {
      this.radius = 580;
    }
  }
  }`,
`    } else {
      this.radius = 580;
    }
  }`
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Fixed extra brace in coverflow3d.js!');
