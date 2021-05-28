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
    }
  },
  // vue-cli
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  // 输出路径：https://cli.vuejs.org/zh/config/#outputdir
  outputDir: "admin"
}