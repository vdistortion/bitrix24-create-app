const fullPath = [window.location.origin, window.location.pathname].join('');
const rootPath = fullPath
  .replace('dist/index.html', '')
  .replace('dist/index.php', '');

export default {
  global: {
    appName: window.appName,
    appNameEng: window.appNameEng,
    appCodeName: window.appCodeName,
    appDirName: window.appDirName,
    archiveName: window.archiveName,
    isDev: window.isDev,
    isProd: window.isProd,
    isWatch: window.isWatch,
  },
  path: {
    root: rootPath,
    handler: fullPath,
    ajaxUrl: `${rootPath}ajax/`,
  },
};
