import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.resolve(__dirname).split(path.sep);
const appDirName = fullPath[fullPath.length - 1];
const archiveName = `${appDirName}.zip`;

export {
  appDirName,
  archiveName,
};
