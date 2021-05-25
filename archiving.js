const fs = require('fs');
const archiver = require('archiver');
const { archiveName } = require('./getNames');

const output = fs.createWriteStream(archiveName);
const archive = archiver('zip', {
  zlib: {
    level: 9,
  },
});

archive.pipe(output);

archive.directory('dist');
archive.file('consts.js');
archive.file('index.html');

archive.finalize();
