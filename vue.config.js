const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/scss/variables.scss";',
      },
    },
  },

  publicPath: '/',
  outputDir: path.join(__dirname, 'dist/'),
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, 'dist'),
        outputDir: path.join(__dirname, 'dist/'),
        indexPath: path.join(__dirname, 'dist', '/index.html'),
        routes: [
          '/'
        ],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        },
        postProcess(renderedRoute) {
          renderedRoute.html = renderedRoute.html.replace(/<script (.*?)>/g, '<script $1 defer>');
          return renderedRoute;
        }
      }),
    ],
  },
};
