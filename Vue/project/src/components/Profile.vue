<template>
    <div>
        <h2>Profile</h2>
        <p>{{$route.query.name}}</p>
        <p>{{$route.query.age}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>