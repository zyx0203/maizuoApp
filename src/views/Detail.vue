<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-17 13:07:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-24 21:48:27
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\Detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-if="filmInfo">
        <i class="back iconfont icon-back" @click="handleback" v-back></i>
        <div class="detailbar" v-scroll>
            <i class="iconfont icon-back" @click="handleback"></i>
            <span class="tarname">{{filmInfo.name}}</span>
        </div>
        <div :style="{
            backgroundImage:'url('+filmInfo.poster+')'
        }" class="poster"></div>
        <div class="content">
            <div class="title">{{filmInfo.name}}</div>
            <div class="datatext">{{filmInfo.category}}</div>
            <div class="datatext">{{filmInfo.premiereAt | datafilter}}上映</div>
            <div class="datatext">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
            <div class="datasynopsis" :class="isHiden?'synhiden':''">{{filmInfo.synopsis}}</div>
            <div class="text-button" @click="isHiden=!isHiden">点我</div>
        </div>
        <div class="cross"></div>

        <div class="actor">
            <div class="actortitle">演职人员</div>
            <detail-swiper  name="actor" :perview="3.5">
            <detail-swiper-item v-for="data in filmInfo.actors" :key="data.filmId">
                <div :style="{
                    backgroundImage:'url('+data.avatarAddress+')'
                }" class="actorpicture"></div>
                <div class="actorname">{{data.name}}</div>
                <div class="actorrole">{{data.role}}</div>
            </detail-swiper-item>
            </detail-swiper>
        </div>
        <div class="cross"></div>

        <div class="photo">
            <div class="phototitle">剧照</div>
            <detail-swiper name="photo" :perview="2">
            <detail-swiper-item v-for="(data,index) in filmInfo.photos" :key="data.filmId">
                <div :style="{
                    backgroundImage:'url('+data+')'
                }" class="actorpicture" @click="handlepreview(index)"></div>
            </detail-swiper-item>
            </detail-swiper>
        </div>

    </div>
</template>
<script>
import '../assets/iconfont/iconfont.css'
import http from '@/util/http'
import  Vue from 'vue'
import moment from 'moment'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import { ImagePreview } from 'vant'

Vue.directive('scroll',{
    inserted(el){
        el.style.opacity = '0'

        window.onscroll=()=>{
            if((document.documentElement.scrollTop || document.body.scrollTop)>50){
                el.style.opacity = '1'
            }else{
                el.style.opacity = '0'
            }
        }
    },
    unbind(){
        window.onscroll = null
    }
})

Vue.directive('back',{
    inserted(el){
        el.style.opacity = '1'
        
        window.onscroll=()=>{
            if((document.documentElement.scrollTop || document.body.scrollTop)>50){
                el.style.opacity = '0'
            }else{
                el.style.opacity = '1'
            }
        }
    },
    unbind(){
        window.onscroll = null
    }
})

Vue.filter('datafilter',(data)=>{
    return moment(data*1000).format('YYYY-MM-DD')
})
export default ({
    data(){
        return{
            filmInfo:null, //因为打印出来的是对象，故这里不用空数组
            isHiden:true,
        }
    },
    components:{
        detailSwiper,
        detailSwiperItem
    },
    methods:{
        handleback(){
            this.$router.back()
        },
        handlepreview(index){
            ImagePreview({
                images:this.filmInfo.photos,
                startPosition:index,
                closeable:true
            })
        }
    },
    created() {
        //console.log('create',this.$route.params.id)
        http({
            url:`/gateway?filmId=${this.$route.params.id}&k=3480443`,
            headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            //console.log(res.data.data.film)
            this.filmInfo = res.data.data.film
        })
    },
})
</script>
<style lang="scss" scoped>
    .poster{
        width:100%;
        height:11.875rem;
        background-position: center;
        background-size: cover;
    }
    .content{
        padding: .9375rem;
        font-size: .75rem;
        color:gray;
        .title{
            font-size: 1.125rem;
            color:black;
            margin-bottom: .222222rem;
        }
        .datatext{
            margin-top:.2222222rem;
        }
        .datasynopsis{
            height: auto;
            margin-top:.4375rem;
        }
        .synhiden{
            height: 1.875rem;
            overflow: hidden;
            transition: all .5s ease;
        }
        .text-button{
            text-align:center;
        }
    }
    .cross{
        height: .75rem;
        width:100%;
        background-color: #f4f4f4;
    }
    .actor{
        overflow: hidden;
        padding: .9375rem;
        .actortitle{
            padding-bottom: .625rem;
            font-size: 1.125rem;
        }
        .actorpicture{
            height: 5rem;
            width:5.4375rem;
            background-position: center;
            background-size: cover;
        }
    }
    .actorname{
        padding-top:.625rem;
        font-size: .75rem;
        text-align: center;
    }
    .actorrole{
        color: grey;
        font-size: .75rem;
        text-align: center;
    }
    .photo{
        overflow: hidden;
        padding: .9375rem;
        .phototitle{
            padding-bottom: .625rem;
            font-size: 1.125rem;
        }
        .actorpicture{
            height: 6.25rem;
            width:10rem;
            background-size: cover;
        }
    }
    .detailbar{
        display: flex;
        height:2.8125rem;
        width: 100%;
        background-color: white;
        line-height:2.8125rem;
        position: fixed;
        transition: all 0.5s;
        .tarname{
            font-size: 1.125rem;
            padding-left: 7.5rem;
        }
        i{
            font-size: 1.5625rem;
        }
    }
    .back{
        margin-top:.625rem;
        position: fixed;
        float:left;
        height: 1.875rem;
        width: 1.875rem;
        border-radius: 50%;
        font-size: 1.5625rem;
        line-height: 1.875rem;
        background-color: rgba(128, 128, 128, 0.837);
        transition: all 0.5s;
    }
</style>