import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';
import json from './package.json' assert { type: 'json' };

const archive = archiver('zip', { zlib: { level: 9 } });

archive.directory(['dist', 'ng-template', 'browser'].join(path.sep), '', null);
archive.pipe(fs.createWriteStream(`${json.name}.zip`));
archive.finalize().catch(console.warn);
