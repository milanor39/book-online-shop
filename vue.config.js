const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './',

  //webpack配置
  configureWebpack: {
    //關閉 webpack 的性能提示
    performance: {
      hints: false
    }
  }
})
