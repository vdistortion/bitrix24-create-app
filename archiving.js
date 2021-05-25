const fs = require('fs');
const archiver = require('archiver');
const { archiveName } = require('./getNames');

const output = fs.createWriteStream(archiveName);
const archive = archiver('zip', {
  zlib: {
    level: 9,
  },
});
const list = {
  directories: ['dist'],
  files: ['consts.js', 'index.html'],
};

archive.pipe(output);

list.directories.forEach((directory) => {
  archive.directory(directory, directory, null);
});

list.files.forEach((fileName) => {
  archive.file(fileName, {
    name: fileName,
  });
});

archive.finalize();
