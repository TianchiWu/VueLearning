<template>
    <div>
        <h2>User</h2>
        <p>{{userId}}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>