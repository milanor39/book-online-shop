<template>
    <header>
        <base-card>
            <div class="header-layout">
                <a class="bar" href="#" @click="toggleMobileMenu"><i class="fa-solid fa-bars fa-2x"></i></a>
                <div class="title-layout">
                    <router-link to="/" @click="toHome">
                        <div class="logo">
                            <h1>SHIRANAMI</h1>
                            <h3>白波書店</h3>
                        </div>
                    </router-link>
                    <div class="account-layout">
                        <ul>
                            <li v-if="isLoggedin">
                                <span class="greeting">歡迎回來! {{ getOwner }}</span><a href="#" class="logout"
                                    @click="logout">登出</a>
                            </li>
                            <li v-else>
                                <router-link to="/login">登入</router-link>
                            </li>|
                            <li>
                                <router-link :to="toMembercenter">會員中心</router-link>
                            </li>|
                            <li>
                                <router-link :to="toCart">
                                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>購物車
                                    <span v-if="!qtyInCart == 0" class="qty"> ( {{ qtyInCart }} ) </span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mobile-account-layout">
                    <ul>
                        <li>
                            <router-link :to="toMembercenter"><i class="fa-solid fa-user fa-lg"></i></router-link>
                        </li>
                        <li>
                            <router-link class="mobile-cart" :to="toCart">
                                <i class="fa-solid fa-cart-shopping fa-lg"></i>
                                <span v-if="!qtyInCart == 0" class="mobile-qty"> {{ qtyInCart }} </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </base-card>
    </header>
    <nav class="mobile-menu" v-show="showMobileMenu">
        <base-card>
            <h3 class="mobile-menu-title">書籍分類</h3>
            <ul>
                <li>
                    <router-link to="/literature" @click="toggleMobileMenu">文學小說</router-link>
                </li>
                <li>
                    <router-link to="/business" @click="toggleMobileMenu">商業理財</router-link>
                </li>
                <li>
                    <router-link to="/art" @click="toggleMobileMenu">藝術設計</router-link>
                </li>
                <li>
                    <router-link to="/humanities" @click="toggleMobileMenu">人文社會</router-link>
                </li>
                <li>
                    <router-link to="/travel" @click="toggleMobileMenu">旅遊</router-link>
                </li>
                <li>
                    <router-link to="/comic" @click="toggleMobileMenu">漫畫</router-link>
                </li>
            </ul>
        </base-card>
    </nav>
    <nav class="pc-nav">
        <base-card>
            <ul>
                <li>
                    <router-link to="/literature">文學小說</router-link>
                </li>
                <li>
                    <router-link to="/business">商業理財</router-link>
                </li>
                <li>
                    <router-link to="/art">藝術設計</router-link>
                </li>
                <li>
                    <router-link to="/humanities">人文社會</router-link>
                </li>
                <li>
                    <router-link to="/travel">旅遊</router-link>
                </li>
                <li>
                    <router-link to="/comic">漫畫</router-link>
                </li>
            </ul>
        </base-card>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        toHome() {
            this.showMobileMenu = false;
            window.scrollTo(0, 0);
        },
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        logout() {
            this.$router.replace('/loggedout')
            return this.$store.dispatch('logout')
        }
    },
    computed: {
        //會員中心：登入-會員中心，非登入-登入畫面
        toMembercenter() {
            const isLogin = this.$store.getters.logSituation;
            if (isLogin === false) {
                return '/login'
            } else {
                return '/membercenter'
            }
        },
        //購物車：登入-購物車，非登入：登入畫面
        toCart() {
            const isLogin = this.$store.getters.logSituation;
            if (isLogin === false) {
                return '/login'
            } else {
                return '/cart'
            }
        },
        //取得登入狀態
        isLoggedin() {
            return this.$store.getters.logSituation
        },
        //取得使用者名字
        getOwner() {
            return this.$store.getters.owner
        },
        //取得購物車狀態
        qtyInCart() {
            return this.$store.getters['cart/qtyInCart']
        }
    }
}
</script>

<style scoped>
/*整體header排版 */
header {
    background-color: var(--main-color);
}

.title-layout {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.bar {
    display: none;
    color: white;
}

/*logo */
.logo {
    display: flex;
    flex-direction: column;
    color: whitesmoke;
    display: inline-block;
    text-align: center;
}

.logo h1 {
    font-size: 3em;
    margin: 0;
}

.logo h3 {
    font-family: 'Noto Serif TC', serif;
    margin: 0;
    letter-spacing: 1.2rem;
}

a {
    text-decoration: none;
}

/*登入、登出、購物車列表 */
.account-layout ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    color: whitesmoke;
}

.account-layout ul li {
    color: whitesmoke;
    padding: 0 10px;
}

.account-layout a {
    color: whitesmoke;
    border-bottom: solid 1px;
    border-color: var(--main-color);
}

.account-layout a:hover,
.account-layout a:active {
    border-color: whitesmoke;
}

/*nav*/

.pc-nav {
    background-color: whitesmoke;
    padding: 3px;
}

.pc-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
}

ul li :hover {
    background-color: var(--main-color);
}

.pc-nav a {
    font-size: 1.2rem;
    padding: 10px 20px;
    color: black;
}

.pc-nav a:hover,
.pc-nav a.router-link-active {
    color: whitesmoke;
    background-color: var(--main-color);
}

.mobile-account-layout {
    display: none;
}

.mobile-menu {
    position: fixed;
    background-color: whitesmoke;
    top: 100px;
    left: 0px;
    width: 100%;
    z-index: 20;
    height: 100vh;
}

.mobile-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mobile-menu li {
    text-align: center;
}

.mobile-menu a {
    font-size: 1.5rem;
    color: black;
}


.mobile-menu-title {
    text-align: center;
}

/*招呼 */
.greeting {
    margin-right: 40px;
}



/*購物車 */
.qty {
    font-size: 1.2rem;
}

.mobile-cart {
    position: relative;
}

.mobile-qty {
    position: absolute;
    right: -5px;
    top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border: solid 1px white;
    border-radius: 50%;
    z-index: 20px;
    background-color: var(--main-color);
    font-size: 20px;
    line-height: 20px;
}

@media (max-width: 768px) {
    header {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .header-layout {
        display: flex;
        align-items: center;
    }

    .bar {
        display: block;
    }

    .mobile-account-layout {
        display: block;
    }

    .mobile-account-layout ul {
        padding: 0;
        list-style: none;
        display: flex;
    }

    .mobile-account-layout a {
        color: white;
        padding: 0 5px;
    }

    .account-layout {
        display: none;
    }

    .logo h1 {
        font-size: 1.8em;
    }

    .pc-nav {
        display: none;
    }

    .title-layout {
        margin: 0 auto;
    }



}
</style>