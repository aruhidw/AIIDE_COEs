const fs = require('fs');
const path = require('path');

function removeComments(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let result = content;

  if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    // Remove block comments /* */
    result = result.replace(/\/\*[\s\S]*?\*\//g, '');
    
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      // Remove line comments //
      // Be careful not to remove urls like http://
      result = result.replace(/(^|\s)\/\/.*/g, '$1');
    }
  } else if (filePath.endsWith('.html')) {
    // Remove HTML comments <!-- -->
    result = result.replace(/<!--[\s\S]*?-->/g, '');
  }

  if (result !== content) {
    fs.writeFileSync(filePath, result, 'utf8');
    console.log('Removed comments from', filePath);
  }
}

function traverse(dir) {
  if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('dist')) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else {
      if (['.js', '.jsx', '.css', '.html'].includes(path.extname(fullPath))) {
        removeComments(fullPath);
      }
    }
  }
}

traverse(process.cwd());
