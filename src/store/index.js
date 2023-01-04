/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-13 22:09:40
 * @LastEditors: zyx 13415143367@163.com
 * @LastEditTime: 2022-10-05 15:05:23
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import BetterScroll from 'better-scroll'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedstate({  //实现数据持久化，刷新不重置
    reducer:(state)=>{
      return{
        cityId:state.cityId,
        cityName:state.cityName
      }
    }
  })],

  state:{
    cityId:'310100',
    cityName:'上海',
    cinemaList:[],
  },
  actions:{
    getCinemaData(store){
        //console.log("yunxingle")
        return http({
          url:`/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=1111219`,
          headers:{
              'X-Host': 'mall.film-ticket.cinema.list'
          }
      }).then(res=>{
          //console.log(res.data.data.cinemas)
          store.commit('changeCinemaData',res.data.data.cinemas)
      }) 
    }
  },
  mutations:{
    changeCityName(state,cityName){
        state.cityName = cityName
    },
    changeCityId(state,cityId){
      state.cityId = cityId
    },
    changeCinemaData(state,data){
      state.cinemaList = data
    },
    clearCinema(state){
      state.cinemaList = []
    }
  }
})
