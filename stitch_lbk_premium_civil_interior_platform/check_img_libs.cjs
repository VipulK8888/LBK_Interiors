const fs = require('fs');
['sharp', 'jimp', 'canvas'].forEach(m => {
  try {
    require(m);
    console.log(m, 'is available');
  } catch (e) {
    console.log(m, 'is NOT available');
  }
});
