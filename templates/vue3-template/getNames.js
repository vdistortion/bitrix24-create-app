import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.resolve(__dirname).split(path.sep);
const appName = fullPath[fullPath.length - 1];
const archiveName = `${appName}.zip`;

export {
  appName,
  archiveName,
};
