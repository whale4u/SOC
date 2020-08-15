<template>
<div>
<el-container>
  <el-header>
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/vuehome/index">首页</el-menu-item>
        <el-menu-item index="/vuehome/home">工作台</el-menu-item>
        <el-menu-item index="/vuehome/manage">系统管理</el-menu-item>
        <el-submenu index="4">
        <template slot="title">罗小四</template>
            <el-menu-item index="/vuehome/home">个人中心</el-menu-item>
            <el-menu-item index="/vuehome/vuelogin">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-header>
  <el-main>
    <router-view></router-view> 
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "VueHome",
    data() {
        return {
            data: 1,
            activeIndex: '1',
            meunRoute: true
        }
    },
    methods: {
        handleSelect (key, path) {
            this.activeIndex = key
            this.data = key
        },
        submitForm () {
            axios.get('/api/hello',{
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem('token')
                },
            })
            .then(function (response) {
                console.log(response)
            })
        }
    },
}
</script>
<style>
.el-header, .el-footer {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    min-height: 600px;
    } 
  .home-page {
      width: 100%;
      height: 200px;
      background: url('../../assets/logo.png')
  }
  .el-menu--horizontal>.el-submenu {
    float: right;
}
</style>