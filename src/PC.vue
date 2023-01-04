<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-24 15:08:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-24 16:33:37
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\PC.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <el-submenu :index="data.id+''"  v-for="data in datalist" :key="data.id">
        <template slot="title"><i class="el-icon-message"></i>{{data.title}}</template>
        <el-menu-item-group>
          <el-menu-item :index="item.id+''" v-for="item in data.children" :key="item.id">{{item.title}}</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(ElementUI)

export default({
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData:[
            {
                name:'张伟',
                date:'2022-05-01',
                address:'广东'
            },
                        {
                name:'丁洁',
                date:'2022-05-02',
                address:'深圳'
            },            {
                name:'毛蛋',
                date:'2022-05-03',
                address:'东北'
            }
        ],
        datalist:[
            {
                title:'培养方案',
                id:1,
                children:[
                    {
                        id:1-1,
                        title:'培养计划'
                    },
                    {
                        id:1-2,
                        title:'人才教育'
                    }
                ],
            },
            {
                title:'学习成绩',
                id:2,
                children:[
                    {
                        id:2-1,
                        title:'学分绩点'
                    },
                    {
                        id:2-2,
                        title:'成绩管理'
                    }
                ]
            }
        ]
      }
    }
})
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
