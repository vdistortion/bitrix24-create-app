const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devServer: {
    hot: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'dist/'
    : 'http://localhost:8080/',
  pages: {
    index: 'src/index.js',
    install: 'src/install.js',
  },
  chainWebpack: (config) => {
    ['index', 'install'].forEach((file) => {
      config
        .plugin(`html-${file}`)
        .tap((args) => {
          args[0].filename = path.resolve(__dirname, `${file}.html`);
          args[0].alwaysWriteToDisk = true;
          return args;
        });
    });

    config
      .plugin('define')
      .tap(args => {
        args[0] = {
          ...args[0],
          DIRNAME_APP: `"${path.resolve(__dirname).split(path.sep).pop()}"`,
        };

        return args;
      });
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackHarddiskPlugin(),
    ],
  },
  transpileDependencies: [
    'vuetify',
  ],
};
