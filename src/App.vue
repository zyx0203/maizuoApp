<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-13 22:09:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-24 21:29:25
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
// ES6导出规范
export default {
  data () {
    return {
      
    }
  },
}
  
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
  }
  html,body{
    height:100%;
  }
  .zyxactive{
    color:red;
  }
</style>
