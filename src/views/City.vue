<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-25 21:22:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-29 09:43:31
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\City.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <van-nav-bar title="标题" @click-left="handleleft">
            <template #left>
            <van-icon name="cross" size="18" color="black"/>
            </template>
        </van-nav-bar>
        <van-index-bar  :index-list="computedList" @select="handleselect">
            <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handlecity(item)"/>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import http from '@/util/http'
import { Toast } from 'vant'

export default({
    data(){
        return{
            cityList:[]
        }
    },
    computed:{
        computedList(){
            return this.cityList.map(item=>item.type)
        }
    },

    mounted(){
        http({
            url:'/gateway?k=8161009',
            headers:{
                'X-Host':'mall.film-ticket.city.list'
            }
        }).then(res=>{
            this.cityList = this.renderCity(res.data.data.cities)
        })
    },

    methods:{
        renderCity(list){
            //生成26个字母数组
            var letterlist = []
            var citylist = []
            for(var i = 65; i <91; i++){
                letterlist.push(String.fromCharCode(i))
            }
            letterlist.forEach(letter=>{
                var newlist = list.filter(item=>item.pinyin.substring(0, 1).toUpperCase()===letter)

                citylist.push({
                type:letter,
                list:newlist
                })
            })
            //console.log(citylist)
            return citylist
        },

        handleselect(data){
            Toast({
                message:data,
                duration:700
                });
        },
        handlecity(item){            
            this.$store.commit('changeCityName', item.name);
            this.$store.commit('changeCityId', item.cityId);
            this.$router.back()
        },
        handleleft(){
            this.$router.back()
        }
    }

})
</script>
<style>
    .van-toast--html, .van-toast--text{
        min-width: 2rem;
    }
</style>
