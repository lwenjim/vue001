const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/apis':{
        target: 'http://127.0.0.1:8081/',
        secure:false,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  }
})
