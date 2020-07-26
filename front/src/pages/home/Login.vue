<template>
  <div id="root">
    用户名：<br>
    <input v-model="username"> <br>
    密码：<br>
    <input v-model="password"> <br>
    <button @click="submitForm">submit</button>
    <button type="reset">reset</button> <br>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'Login',
      data() {
          return {
            username: '',
            password: ''};
      },
      methods: {
          submitForm: function () {
            //   alert("submitForm")
            // alert(this.uname + ' ' + this.upass)
            var self = this;
            // var params = new URLSearchParams();
            // params.append('username', this.username);
            // params.append('password', this.password);
            axios.post('/api/login', {
              username: this.username,
              password: this.password
            })
            .then(function (response) {
                // console.log(response.data);
                var num = response.data
                // var ses= window.sessionStorage;
                if (num) {
                  sessionStorage.setItem('token', num)
                  self.$router.push({path:'/'})
                }  
                // if (num == 0) {
                //   var token = "xxxxxx";
                //   ses.setItem('data', token);
                // } else {
                //   alert(num);
                // }
            })
            .catch(function (error) {
                console.log(error);
            });
          }
      }
  }
</script>

<style>
</style>