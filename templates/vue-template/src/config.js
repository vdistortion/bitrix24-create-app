const fullPath = [window.location.origin, window.location.pathname].join('');
const rootPath = fullPath
  .replace('dist/index.html', '')
  .replace('dist/index.php', '')
  .replace('index.html', '')
  .replace('index.php', '');

export default {
  global: {
    appName: window.appName,
    appNameEng: window.appNameEng,
    appCodeName: window.appCodeName,
    appDirName: window.appDirName,
    archiveName: window.archiveName,
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
    isWatch: window.isWatch,
  },
  path: {
    root: rootPath,
    handler: fullPath,
    ajaxUrl: `${rootPath}ajax/`,
  },
};
