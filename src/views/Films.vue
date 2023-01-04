<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 16:29:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-25 15:54:28
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\Films.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <film-swiper :key="datalist.length">
            <film-swiper-item v-for="data in datalist" :key="data">
                <img :src="data">
            </film-swiper-item>
        </film-swiper>
        <film-tabbar class="sticky"></film-tabbar>
        <router-view></router-view>
        <tabbar></tabbar>

    </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import filmSwiper from '@/components/films/FilmSwiper'
import filmTabbar from '@/components/films/FilmTabbar'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import axios from 'axios'
export default{
    data(){
        return {
            datalist:[]
        }
    },
    mounted(){

            this.datalist=["https://liangcang-material.alicdn.com/prod/upload/52f7d5207b1a435d8e97e1844163a525.webp.jpg?x-oss-process=image/resize,w_1084/format,webp/interlace,1",
            "https://liangcang-material.alicdn.com/prod/upload/036045a723e447ac9b91f14db03144ca.webp.jpg?x-oss-process=image/resize,w_1084/format,webp/interlace,1",
            "https://liangcang-material.alicdn.com/prod/upload/3ce47dab4d414d31bdb5e59c1aedc9b3.webp.jpg?x-oss-process=image/resize,w_1084/format,webp/interlace,1"]
    },
    components:{
        filmSwiper,
        filmSwiperItem,
        filmTabbar,
        tabbar
    },
}

</script>

<style scoped>
    img{
        height: 100%;
        width:100%;
    }
    .sticky{
        position: sticky;
        top:0;
        background: white;
        z-index: 100;
    }
</style>