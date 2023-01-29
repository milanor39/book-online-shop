<template>
    <base-card>
        <h3>註冊成功</h3>
        <p>歡迎加入會員，20秒後將為您轉往首頁</p>
    </base-card>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.replace('/')
        }, 20000)
    }
}
</script>