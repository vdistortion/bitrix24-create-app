import fs from 'node:fs';
import archiver from 'archiver';

const packageJson = JSON.parse(fs.readFileSync('./package.json'));
const archive = archiver('zip', { zlib: { level: 9 } });
const output = fs.createWriteStream(`${packageJson.name}.zip`);
const path = (name) => ['dist', name].join('/');
const list = [
  {
    file: false,
    name: 'assets',
  },
  {
    file: true,
    name: 'nouserpic.svg',
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
archive.finalize().catch(console.warn);
