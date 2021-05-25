const path = require('path');

const dirNameApp = path.resolve(__dirname).split(path.sep).pop();

module.exports = {
  dirNameApp,
  archiveName: [dirNameApp, 'zip'].join('.'),
};
