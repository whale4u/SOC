<template>
<div>
<el-container>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">工作台</el-menu-item>
        <el-menu-item index="3">系统管理</el-menu-item>
        <el-submenu index="4">
        <template slot="title">罗小四</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-header>
  <el-main>Main</el-main>
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
            data: 0
        }
    },
    methods: {
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>