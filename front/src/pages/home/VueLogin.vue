<template>
<div>
    <div>
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
    </div>
    <div>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    </div>
    <el-row>
    <el-button>清除</el-button>
    <el-button @click="login">登录</el-button>
    </el-row>
</div>
</template>

<style>
  .el-input {
    width:200px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import axios from 'axios'
  export default {
    name: 'VueLogin',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
        login: function () {
            var self = this;

            axios.post('/api/login', {
                username: this.username,
                password: this.password
            })
            .then (function (response) {
                var token = response.data
                if (token) {
                    sessionStorage.setItem('token', token)
                    self.$router.push({path:'/'})
                }
            })
            .catch (function (error) {
                console.log(error)
            })
        }
    },
  };
</script>