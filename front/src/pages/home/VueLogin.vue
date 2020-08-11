<template>
<div>
<el-input placeholder="请输入内容" v-model="input" clearable></el-input>
<br />
<el-input placeholder="请输入密码" v-model="input" show-password></el-input>
<el-row>
  <el-button plain>清除</el-button>
  <el-button plain>登录</el-button>
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
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        input: '',
        tableData: Array(20).fill(item)
      }
    }
  };
</script>