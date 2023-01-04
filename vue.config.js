/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-13 22:09:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-26 19:47:37
 * @FilePath: \vscode file\study point\单组件文件\test2008\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false, // 关闭代码格式检测

  //  配置反向代理
  devServer: {
    proxy: {
      '/vips-mobile': {
        target: 'https://mapi-rp.vip.com',
        changeOrigin: true
      }
    }
  }
}
