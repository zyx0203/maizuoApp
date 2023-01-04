<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 23:47:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-28 15:16:37
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\views\films\Comingsoon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-list>
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handlechangepage(data.filmId)"
      >
        <img :src="data.poster" />
        <div>
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <div class="actors">主演：{{ data.actors | actorsFilter }}</div>
            <div>
              上映日期: {{ getWeek(data.premiereAt * 1000) }}
              {{ data.premiereAt | datafilter }}
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import http from "@/util/http";
import Vue from "vue";
import moment from "moment";

Vue.filter("actorsFilter", (data) => {
  return data.map((item) => item.name).join(" ");
});
Vue.filter("datafilter", (data) => {
  return moment(data * 1000).format("M月DD日");
});
export default {
  data() {
    return {
      datalist: [],
      loading: false,
      finished: false,
    };
  },
  mounted() {
    http({
      url: "/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=7985050",
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      //console.log(res.data.data.films)
      this.datalist = res.data.data.films;
    });
  },
  methods: {
    handlechangepage(id) {
      this.$router.push({
        name: "/indetail",
        params: {
          id,
        },
      });
    },
    onload() {
      console.log("到底了");
    },
    getWeek(data) {
      // 参数时间戳
      let week = moment(data).day();
      switch (week) {
        case 1:
          return "周一";
        case 2:
          return "周二";
        case 3:
          return "周三";
        case 4:
          return "周四";
        case 5:
          return "周五";
        case 6:
          return "周六";
        case 0:
          return "周日";
      }
    },
  },

  getWeek(data) {
    // 参数时间戳
    let week = moment(data).day();
    switch (week) {
      case 1:
        return "周一";
      case 2:
        return "周二";
      case 3:
        return "周三";
      case 4:
        return "周四";
      case 5:
        return "周五";
      case 6:
        return "周六";
      case 0:
        return "周日";
    }
  },
};
</script>
<style lang="scss" scoped>
.van-list {
  padding-bottom: 3.875rem;
  .van-cell__value {
    display: flex;
    img {
      padding-right: 0.625rem;
      height: 7.5rem;
      width: 5rem;
    }
    .title {
      font-size: 1rem;
    }
  }
}
.content {
  padding: 0.125rem;
  font-size: 0.8125rem;
  color: gray;
  .actors {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 12.5rem;
  }
}
</style>
