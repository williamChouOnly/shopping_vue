<template>
    <div class=''>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){
            // 清空sessionstorage
            window.sessionStorage.clear()
            // 跳转登陆页面
            this.$router.push('/login')
        }
    }
}
</script>

<style lang='less' scoped>

</style>