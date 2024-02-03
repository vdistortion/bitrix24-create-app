const fullPath = [window.location.origin, window.location.pathname].join('');
const rootPath = fullPath
  .replace('dist/index.html', '')
  .replace('dist/index.php', '')
  .replace('index.html', '')
  .replace('index.php', '');

export default {
  path: {
    root: rootPath,
    handler: fullPath,
    httpBaseUrl: `${rootPath}backend/`,
  },
};
