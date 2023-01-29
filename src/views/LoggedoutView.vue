<template>
    <base-card>
        <h3>登出會員</h3>
        <p>您已經登出白浪書店，20秒後將為您轉往首頁</p>
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