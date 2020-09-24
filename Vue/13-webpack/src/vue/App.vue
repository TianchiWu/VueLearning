<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'

    export default {
        name: "App",
        data() {
            return {
                message: 'Hello World!',
                name: 'Jack'
            }
        },
        methods: {
            btnClick() {

            }
        },
        components: {
            Cpn
        }
    }
</script>

<style scoped>
    .title{
        color: green;
    }
</style>