<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-19 14:29:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-19 15:11:14
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\components\films\FilmTabbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <ul>
        <router-link to="/films/nowplaying" custom v-slot="{navigate,isActive}">
            <li  @click="navigate" :class="isActive?'ftactive':''">
            <span :class="isActive?'spanborder':''">正在热映</span>           
            </li>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{navigate,isActive}">
            <li  @click="navigate" :class="isActive?'ftactive':''">
            <span :class="isActive?'spanborder':''">即将上线</span>           
            </li>
        </router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul,li{
        list-style: none;
    }
    ul{
        display:flex;
        width:100%;
        height: 2.625rem;
        justify-content: center;
        align-items: center;
        li{
            flex:1;
            text-align: center;
            .spanborder{
                border-bottom: 1px solid red;
            }
        }
    }
    .ftactive{
        color:red;
    }
</style>