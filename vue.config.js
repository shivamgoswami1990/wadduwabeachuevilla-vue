module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/scss/variables.scss";',
      },
    },
  }
};
