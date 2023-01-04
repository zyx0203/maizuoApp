<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-29 17:01:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-29 17:29:19
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
        <div class="box">
        <ul v-if="value">
            <li v-for="data in computedcinema" :key="data.cinemaId">
                <div class="left">
                <div class="cinema_name">{{data.name}}</div>
                <div class="cinema_address">{{data.address}}</div>
                </div>

                <div class="right">
                <div class="cinema_price">￥{{data.lowPrice | pricefilter}}起</div>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import BetterScroll from 'better-scroll'
Vue.filter('pricefilter',(data)=>{
    //return (data/100).toFixed(2) //化作两位小数
    return data/100
})
export default({
    data(){
        return{
            cinemalist:[],
            value:''

        }
    },
    methods:{
        onSearch(){
            console.log("w")
        },
        onCancel(){
            this.$router.back()
        },

    },
    mounted(){

         if(this.$store.state.cinemaList.length===0){
            this.$store.dispatch('getCinemaData').then(res=>{
                //console.log("chenggong")
            })
         }else{
            console.log("缓存")
        }
    },
    computed:{
        computedcinema(){
            return this.$store.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase()) || 
               item.address.toUpperCase().includes(this.value.toUpperCase()) )
        }
    }
})
</script>
<style lang="scss" scoped>
.box{
    height:100%;
    position: relative;
}
ul{
    li{
        height: 4.6875rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-left:1.125rem;
        padding-right:1.125rem;
        .cinema_name{
            padding-bottom: .625rem;
            width:14.375rem;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .cinema_address{
            font-size: .75rem;
            color:grey;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 13.75rem;
        }
        .cinema_price{
            color:#ff5f16;
        }
    }
}
</style>