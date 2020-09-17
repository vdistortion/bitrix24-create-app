const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('app-b24.zip');
const archive = archiver('zip', {
  zlib: {
    level: 9,
  },
});

archive.pipe(output);

archive.directory('dist');
archive.file('index.html');
archive.file('install.html');

archive.finalize();
