const fs = require('fs');
const path = require('path');

function listDir(dir, indent = '') {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`${indent}[DIR] ${file}`);
        if (indent.length < 4) {
          listDir(fullPath, indent + '  ');
        }
      } else {
        console.log(`${indent}${file}`);
      }
    }
  } catch (e) {
    console.error("Error listing:", e.message);
  }
}

listDir(path.join(__dirname, '../node_modules/pdfjs-dist'));
