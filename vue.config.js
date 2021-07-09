const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 修改webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    },
    // 勿略console.log语句
    plugins: process.env.NODE_ENV === 'production'
      ? [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ]
      : [],
    // CDN配置 
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT'
    }
  },
  // vue-cli
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  // 输出路径：https://cli.vuejs.org/zh/config/#outputdir
  outputDir: "admin",
  productionSourceMap: false
  
}