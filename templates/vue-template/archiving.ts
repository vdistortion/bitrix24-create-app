import { createWriteStream } from 'node:fs';
import { sep } from 'node:path';
import archiver from 'archiver';
import json from './package.json';

const archive = archiver('zip', { zlib: { level: 9 } });
const output = createWriteStream(`${json.name}.zip`);
const path = (name: string) => ['dist', name].join(sep);
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
