const path = require('path');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');
const { dirNameApp, archiveName } = require('./getNames');

const pagesList = {
  index: 'src/main.js',
};

module.exports = {
  devServer: {
    hot: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'dist/'
    : 'http://localhost:8080/',
  pages: pagesList,
  chainWebpack(config) {
    Object.keys(pagesList).forEach((file) => {
      config
        .plugin(`html-${file}`)
        .tap((args) => ([{
          ...args[0],
          filename: path.resolve(__dirname, `${file}.html`),
          alwaysWriteToDisk: true,
        }]));
    });

    config
      .plugin('define')
      .tap((args) => ([{
        ...args[0],
        'window.DIRNAME_APP': `"${dirNameApp}"`,
        'window.ARCHIVE_NAME': `"${archiveName}"`,
      }]));
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackHardDiskPlugin(),
    ],
  },
  transpileDependencies: [
    'vuetify',
  ],
};
