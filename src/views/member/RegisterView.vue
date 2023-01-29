<template>
    <base-card>
        <div class="register-layout">
            <div class="register-card">
                <div class="title">
                    <h3>會員註冊</h3>
                </div>
                <form @submit.prevent="register">
                    <div class="input" :class="{ 'error': !isUsernameValid }">
                        <label for="account">帳號</label><br>
                        <input type="text" id="account" placeholder="請輸入帳號" v-model="username">
                        <p class="error-message" v-if="!isUsernameValid">請輸入帳號</p>
                    </div>
                    <div class="input" :class="{ 'error': !isPasswordValid }">
                        <label for="password">密碼</label><br>
                        <input type="password" name="password" id="password" placeholder="請輸入密碼" v-model="password">
                        <p class="error-message" v-if="!isPasswordValid">請輸入密碼</p>
                    </div>
                    <div class="input" :class="{ 'error': !isPasswordAgainValid }">
                        <label for="passwordAgain">再次輸入密碼</label><br>
                        <input type="password" name="passwordAgain" id="passwordAgain" placeholder="請再次輸入密碼"
                            v-model="passwordAgain">
                        <p class="error-message" v-if="!isPasswordAgainValid">請再次輸入密碼</p>
                        <p class="error-message" v-if="!isPasswordMatch">輸入密碼不相符</p>
                    </div>
                    <div class="input" :class="{ 'error': !isOwnerValid }">
                        <label for="owner">姓名</label><br>
                        <input type="text" id="owner" placeholder="請輸入姓名" v-model="profile.owner">
                        <p class="error-message" v-if="!isOwnerValid">請輸入姓名</p>
                    </div>
                    <div class="input" :class="{ 'error': !isEmailValid }">
                        <label for="email">電子郵件</label><br>
                        <input type="text" id="email" placeholder="請輸入電子郵件" v-model="profile.email">
                        <p class="error-message" v-if="!isEmailValid">格式錯誤</p>
                    </div>
                    <div class="input" :class="{ 'error': !isPhoneValid }">
                        <label for="phone">電話</label><br>
                        <input type="text" id="phone" placeholder="請輸入電話" v-model="profile.phone">
                        <p class="error-message" v-if="!isPhoneValid">請輸入電話</p>
                    </div>
                    <div class="input" :class="{ 'error': !isAddressValid }">
                        <label for="address">地址</label><br>
                        <input type="text" id="address" placeholder="請輸入地址" v-model="profile.address">
                        <p class="error-message" v-if="!isAddressValid">請輸入地址</p>
                    </div>

                    <button class="submit">註冊</button>
                </form>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            //檢查
            isUsernameValid: true,
            isPasswordValid: true,
            isPasswordMatch: true,
            isPasswordAgainValid: true,
            isOwnerValid: true,
            isEmailValid: true,
            isPhoneValid: true,
            isAddressValid: true,
            //註冊表單
            username: '',
            password: '',
            passwordAgain: '',
            profile: {
                owner: '',
                email: '',
                phone: '',
                address: ''
            },
            orders: [],
            favorites: []
        }
    },
    methods: {
        //註冊
        register() {
            //檢查輸入欄位
            this.username !== '' ? this.isUsernameValid = true : this.isUsernameValid = false;
            this.password !== '' ? this.isPasswordValid = true : this.isPasswordValid = false;
            this.passwordAgain !== '' ? this.isPasswordAgainValid = true : this.isPasswordAgainValid = false;
            this.password !== this.passwordAgain ? this.isPasswordMatch = false : this.isPasswordMatch = true;
            this.profile.owner !== '' ? this.isOwnerValid = true : this.isOwnerValid = false;
            this.profile.email !== '' && this.profile.email.indexOf('@') !== -1 ? this.isEmailValid = true : this.isEmailValid = false;
            this.profile.phone !== '' ? this.isPhoneValid = true : this.isPhoneValid = false;
            this.profile.address !== '' ? this.isAddressValid = true : this.isAddressValid = false;
            if (this.isUsernameValid && this.isPasswordValid && this.isPasswordAgainValid && this.isOwnerValid && this.isEmailValid && this.isPhoneValid && this.isAddressValid) {
                if (this.password !== this.passwordAgain) {
                    this.isPasswordMatch = false;
                } else {
                    this.isPasswordMatch = true;
                    // 進行註冊的邏輯
                    this.$store.dispatch('register', {
                        username: this.username,
                        password: this.password,
                        profile: this.profile,
                    });
                    this.$router.replace('/register/sucess')
                }
            }
        }
    }
    //
}
</script>

<style scoped>
/*註冊版面 */
.register-layout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.register-card {
    margin: 80px 0;
    width: 565px;
    border: solid 5px;
    border-color: antiquewhite;
    border-radius: 5px;
    padding: 20px 40px;
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

/*註冊表格 */
label {
    font-size: 1.2rem;
}


input {
    height: 20px;
    width: 95%;
    font-size: 1.2rem;
    padding: 7px;
}

.input {
    margin-bottom: 30px;
    position: relative;
}

.error-message {
    position: absolute;
    bottom: -40px;
    color: red;
}

.submit {
    width: 30%;
    font-size: 1.2rem;
}
</style>