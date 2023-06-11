import fs from 'fs';
import archiver from 'archiver';
// eslint-disable-next-line import/extensions
import { archiveName } from './getNames.js';

const archive = archiver('zip', { zlib: { level: 9 } });
const output = fs.createWriteStream(archiveName);
const path = (file) => ['dist', file].join('/');
const list = [
  {
    file: false,
    name: 'assets',
  },
  {
    file: true,
    name: 'constants.js',
  },
  {
    file: true,
    name: 'index.html',
  },
];

list.forEach(({ file, name }) => {
  if (file) archive.file(path(name), { name });
  else archive.directory(path(name), name, null);
});

archive.pipe(output);
archive.finalize().then(console.info).catch(console.warn);
