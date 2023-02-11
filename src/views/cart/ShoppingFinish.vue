<template>
    <base-card>
        <h3>購物車</h3>
        <div>
            <p>已完成結帳，請至會員專區查詢訂單</p>
            <div class="button">
                <div class="layout">
                    <router-link to="/">回首頁</router-link><router-link to="/membercenter">會員專區</router-link>
                </div>
            </div>
        </div>
    </base-card>
</template>

<style scoped>
p {
    margin-bottom: 100px;
}

a {
    background-color: var(--main-color);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 10px;
}

.button {
    display: block;
}

.layout {
    display: flex;
    justify-content: center;
}
</style>