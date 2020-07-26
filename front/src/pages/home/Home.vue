<template>
    <div>Home
    <div v-model="data"></div>
    <button @click="submitForm">submit</button>
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

<style></style>