import path from 'path';

const fullPath = path.resolve(import.meta.url).split(path.sep);
export const appDirName = fullPath[fullPath.length - 2];
export const archiveName = `${appDirName}.zip`;
