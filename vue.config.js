module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://117.52.155.33:4000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
