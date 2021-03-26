const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: resolve(`dist${process.env.BASE_URL}`),
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    // 編譯錯誤時瀏覽器overlay顯示警告和錯誤
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @use "@style/abstract/_index.scss" as *;
        `
      }
    }
  }
}
