<template>
    <div>Home
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Home",
    data() {
        return {
            data: 0
        }
    },
    mounted() {
        console.log(11111)
        axios.get('/user/userinfo')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err);
        })
    },
}
</script>

<style></style>