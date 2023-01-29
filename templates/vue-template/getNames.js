import path from 'path';

const fullPath = path.resolve(import.meta.url).split(path.sep);
const appDirName = fullPath[fullPath.length - 2];
const archiveName = `${appDirName}.zip`;

export {
  appDirName,
  archiveName,
};
