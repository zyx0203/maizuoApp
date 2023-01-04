<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-17 15:36:02
 * @LastEditors: zyx 13415143367@163.com
 * @LastEditTime: 2023-01-04 15:47:20
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    联系作者：13415143367
    <button @click="handlelogin">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    handlelogin() {
      setTimeout(() => {
        localStorage.setItem("token", "返回的token值");
        console.log(this.$route);
        this.$router.push(this.$route.query.redirect); //去到前面想要去的路径
      }, 0);
    },
  },
};
</script>
