<template>
    <base-card>
        <div class="login-layout">
            <div class="login-card">
                <div class="title">
                    <h3>會員登入</h3>
                    <p>還不是會員嗎?<router-link to="/register" class="register">註冊會員</router-link></p>
                </div>
                <form @submit.prevent="login">
                    <div class="input">
                        <label for="account">帳號</label><br>
                        <input type="text" id="account" placeholder="請輸入帳號" v-model="username">
                    </div>
                    <div class="input">
                        <label for="password">密碼</label><br>
                        <input type="password" name="password" id="password" placeholder="請輸入密碼" v-model="password">
                        <p v-if="isPasswordValid" class="error-message">帳號或密碼錯誤，請檢查輸入內容是否正確</p>
                    </div>
                    <div class="button-layout">
                        <button class="submit">登入</button>
                    </div>
                </form>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isPasswordValid: false
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', { username: this.username, password: this.password })
            if (this.loginFailure) {
                this.$router.replace('/')
            } else {
                this.isPasswordValid = true
            }
        }
    },
    computed: {
        loginFailure() {
            return this.$store.getters.loginFailure
        }
    }
}
</script>
<style scoped>
/*登入版面 */
.login-layout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-card {
    margin: 80px 0;
    width: 565px;
    border: solid 5px;
    border-color: antiquewhite;
    border-radius: 5px;
    padding: 15px 35px;
}

/*標題樣式 */
.title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.title h3 {
    font-size: 1.6rem;
    align-self: flex-end;
    margin: 0;
    display: inline;
}

.title p {
    align-self: flex-end;
    margin: 0;
}

.register {
    color: var(--main-color);
    font-weight: bold;
    border-bottom: solid 1px white;
    text-decoration: none;
}

.register:hover,
.register:active {
    border-color: var(--main-color);
}

/*登入表格 */
label {
    font-size: 1.2rem;
    margin: 5px 0;
}

.input {
    margin-bottom: 25px;
    position: relative;
}

input {
    height: 20px;
    width: 95%;
    font-size: 1.2rem;
    padding: 7px;
}

.submit {
    width: 30%;
    font-size: 1.2rem;
}

.button-layout {
    display: flex;
    justify-content: center;
}

.error-message {
    color: red;
    position: absolute;
    bottom: -40px;
}

@media (max-width: 767px) {
    .title {
        display: block;
    }
}
</style>