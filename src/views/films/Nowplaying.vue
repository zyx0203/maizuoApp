<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 23:47:04
 * @LastEditors: zyx 13415143367@163.com
 * @LastEditTime: 2022-10-14 15:24:56
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\films\NowPlaying.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
            > 
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handlechangepage(data.filmId)">
                <img :src="data.poster">
                <div>
                    <div class="title">{{data.name}}</div>
                    <div class="content">
                        <div>观众评分:<span style="color:red;">{{data.grade}}</span></div>
                        <div class="actors">主演：{{data.actors | actorsFilter}}</div>
                        <div>
                            {{data.nation}} |  {{data.runtime}}分钟
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import axios from 'axios' //不再引入axios
import http from '@/util/http'
import Vue from 'vue'
Vue.filter('actorsFilter',(data)=>{
   return data.map(item=>item.name).join(' ')
})
export default({
    data(){
        return{
            datalist:[],
            loading:false,
            finished:false,
            count:1
        }
    },
    mounted(){
        http({
            url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=3114824`,
            headers:{
                // 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16626290001751809785856001","bc":"110100"}', 
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            //console.log(res.data.data.films)
            this.datalist = res.data.data.films

            this.total = res.data.data.total
        })
    },
    methods:{
        onLoad(){
            //console.log("到底了")
              if(this.datalist.length === this.total && this.total!==0){
                this.finished = true
                return
            }
            this.count++
            http({
                url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.count}&pageSize=10&type=1&k=3114824`,
                headers:{
                // 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16626290001751809785856001","bc":"110100"}', 
                'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                this.datalist = [...this.datalist,...res.data.data.films]

                this.loading = false
            })  

        },
        handlechangepage(id){
            this.$router.push({
                name:'/indetail',
                params:{
                    id
                }})
        }
    }
})
</script>
<style lang="scss" scoped>
    .van-list{
        padding-bottom: 3.875rem;;
        .van-cell__value{
            display: flex;
            img{
                padding-right: .625rem;
                height: 7.5rem;
                width:5rem;
            }
            .title{
                font-size:1rem;
            }
        }
    }
    .content{
        padding: .125rem;
        font-size:.8125rem;
        color: gray;
        .actors{
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 12.5rem;
        }
    }
</style>

