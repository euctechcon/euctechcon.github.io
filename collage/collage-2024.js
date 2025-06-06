const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../media/collage/2024');
const outputPath = path.join(__dirname, '2024/imageList.js');

const imageFiles = fs.readdirSync(imageDir)
  .filter(file => /\.(jpe?g|jfif|png|gif)$/i.test(file));

const jsContent = `const imageList = ${JSON.stringify(imageFiles, null, 2)};`;

fs.writeFileSync(outputPath, jsContent);
console.log(`Generated imageList.js with ${imageFiles.length} images.`);
