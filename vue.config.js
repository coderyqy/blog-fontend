module.exports = {
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
  // 输出路径：https://cli.vuejs.org/zh/config/#outputdir
  outputDir: "admin"
}