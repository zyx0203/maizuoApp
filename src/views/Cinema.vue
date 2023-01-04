<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 16:30:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-29 23:01:51
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\Cinema.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 16:30:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-18 22:24:21
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\cinema.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <van-nav-bar title="影院"  ref="navbar" @click-left="handleleft" @click-right="handleright">
            <template #left>{{cityName}}
            <van-icon name="arrow-down" size="15" color="black"/>
            </template>
            <template #right>
            <van-icon name="search" size="18" color="black"/>
            </template>
        </van-nav-bar>
        <div class="box" :style="{
            height:height
            }">
        <ul>
            <li v-for="data in cinemaList" :key="data.cinemaId">
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
        <tabbar></tabbar>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex' //vuex新写法
import tabbar from '@/components/Tabbar'
import Vue from 'vue'
import BetterScroll from 'better-scroll'
Vue.filter('pricefilter',(data)=>{
    //return (data/100).toFixed(2) //化作两位小数
    return data/100
})
export default({
    data(){
        return{
            height:'0px'

        }
    },
    computed:{
        ...mapState(['cinemaList','cityName'])
    },
    components:{
        tabbar
    },
    methods:{
        ...mapActions(['getCinemaData']),
        ...mapMutations(['clearCinema']),
        handleleft(){
            this.$router.push('/city')
            //this.$store.commit('clearCinema');
            this.clearCinema()
        },
        handleright(){
            this.$router.push('/search')
        }
    },
    mounted(){
        //console.log(this.$refs.navbar)
        this.height = document.documentElement.clientHeight - 
        this.$refs.navbar.$el.offsetHeight -
        document.querySelector('footer').offsetHeight + 'px'

         if(this.cinemaList.length===0){
            //this.$store.dispatch('getCinemaData').then(res=>{
            this.getCinemaData().then(res=>{
                this.$nextTick(()=>{
                new BetterScroll('.box',{
                    scrollbar:{
                        fade:true
                    }
                })
            })
            })
         }else{
            console.log("缓存")
            this.$nextTick(()=>{
                new BetterScroll('.box',{
                    scrollbar:{
                        fade:true
                    }
                })
            })
        }
        
/*         http({
            url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1111219`,
            headers:{
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            //console.log(res.data.data.cinemas)
            this.cinemalist=res.data.data.cinemas

            this.$nextTick(()=>{
                new BetterScroll('.box',{
                    scrollbar:{
                        fade:true
                    }
                })
            })
        }) */
    }
})
</script>
<style lang="scss" scoped>
.box{
    height:37.5rem;
    overflow:hidden;
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