<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-18 20:37:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-19 20:06:08
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\components\Tabbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <footer>
    <ul>
        <router-link to="/films" custom v-slot="{navigate,isActive}">
        <li  @click="navigate" :class="isActive?'zyxactive':''">
            <i class="iconfont icon-live"></i>
            <span>电影</span>
        </li>
        </router-link>
        <router-link to="/cinema" custom v-slot="{navigate,isActive}">
        <li  @click="navigate" :class="isActive?'zyxactive':''">
            <i class="iconfont icon-folder"></i>
            <span>影院</span>
        </li>
        </router-link>      
        <router-link to="/center" custom v-slot="{navigate,isActive}">
        <li  @click="navigate" :class="isActive?'zyxactive':''">
            <i class="iconfont icon-addressbook"></i>
            <span>我的</span>           
        </li>
        </router-link>
    </ul>
    </footer>
</template>

<script>
import '../assets/iconfont/iconfont.css'
export default({

})
</script>


<style lang="scss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        left:0;
        width:100%;
        height: 3.875rem;
        background-color: white;
    }
    ul,li{
        list-style: none;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.75rem;
        li{
            flex:1;
            text-align: center;
            display: flex;
            flex-direction: column;
        }
    }
</style>