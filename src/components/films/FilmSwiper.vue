<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-18 15:14:45
 * @LastEditors: zyx 13415143367@163.com
 * @LastEditTime: 2023-01-04 15:55:29
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\components\films\FilmSwiper.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="swiper-contain zyx">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export default {
  mounted() {
    new Swiper(".zyx", {
      /*         direction: 'vertical', // 垂直切换选项 */
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
<style scoped>
html {
  margin: 0;
  padding: 0;
}
.swiper-contain {
  position: relative;
  height: 11rem;
  width: 100%;
}
.swiper-contain {
  overflow: hidden;
}
</style>
