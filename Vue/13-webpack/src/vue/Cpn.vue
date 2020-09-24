<template>
    <div>
        <h2>组件标题</h2>
        <p>组件内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                name: '组件名称'
            }
        }
    }
</script>

<style scoped>

</style>