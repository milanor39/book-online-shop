<template>
    <base-card>
        <h3>會員中心</h3>
        <p v-if="isLoggedIn">{{ getOwner }} 您好 <a class="logout" href="#" @click="logout">登出</a></p>
        <div class="content-layout">
            <ul class="feature-list">
                <li :class="{ 'active': nowArea === 'editProfile' }">
                    <a href="#" @click.prevent="editProfile">會員資料</a>
                </li>
                <li :class="{ 'active': nowArea === 'checkOrder' }">
                    <a href="#" @click.prevent="checkOrder">訂單紀錄</a>
                </li>
                <li :class="{ 'active': nowArea === 'checkWishlist' }">
                    <a href="#" @click.prevent="checkWishlist">願望清單</a>
                </li>
            </ul>
            <div class="area">
                <!--會員資料-->
                <div v-if="nowArea === 'editProfile'">
                    <h3><i class="fa-solid fa-user"></i>{{ getOwnerData.owner }}</h3>
                    <h4>編輯會員資料</h4>
                    <form @submit.prevent="saveProfileChange">
                        <div class="form-layout">
                            <label for="owner">
                                <p>姓名：</p>
                                <p>{{ getOwnerData.owner }}</p>
                            </label>
                            <input type="text" id="owner" v-model="owner">
                        </div>
                        <div class="form-layout">
                            <label for="email">
                                <p>電子信箱：</p>
                                <p>{{ getOwnerData.email }}</p>
                            </label>
                            <input type="input" id="email" v-model="email">
                        </div>
                        <div class="form-layout">
                            <label for="phone">
                                <p>連絡電話：</p>
                                <p>{{ getOwnerData.phone }}</p>
                            </label>
                            <input type="text" id="phone" v-model="phone">
                        </div>
                        <div class="form-layout">
                            <label for="address">
                                <p>收件地址：</p>
                                <p>{{ getOwnerData.address }}</p>
                            </label>
                            <input type="text" id="address" v-model="address">
                        </div>
                        <div class="form-button-layout">
                            <button type="reset">取消</button>
                            <button type="submit">儲存</button>
                        </div>
                    </form>
                </div>
                <!--訂單紀錄-->
                <div v-else-if="nowArea === 'checkOrder'">
                    <h3>訂單紀錄</h3>
                    <table class="order-table" v-if="orders">
                        <tr>
                            <td>
                                <h4>訂單編號</h4>
                            </td>
                            <td>
                                <h4>商品明細</h4>
                            </td>
                            <td>
                                <h4>訂單金額</h4>
                            </td>
                        </tr>
                    </table>
                    <ordersItem v-for="ord in orders" :key="ord.orderId" :orderId="ord.orderId" :product="ord.product"
                        :total="ord.total"></ordersItem>
                    <div class="mobile-order" v-if="orders">
                        <ordersItem v-for="ord in orders" :key="ord.orderId" :orderId="ord.orderId"
                            :product="ord.product" :total="ord.total"></ordersItem>
                    </div>
                    <p v-else>沒有資料</p>
                </div>
                <div v-else-if="nowArea === 'checkWishlist'">
                    <h3>願望清單</h3>
                    <table class="pc-wishlist" v-if="favorites">
                        <tr class="favorites-item-layout">
                            <td>
                                <h4>商品明細</h4>
                            </td>
                            <td>
                                <h4>價格</h4>
                            </td>
                            <td>
                                <h4>庫存</h4>
                            </td>
                            <td>
                                <h4>操作</h4>
                            </td>
                        </tr>
                        <favorites-item v-for="fav in favorites" :key="fav.id" :id="fav.id" :eng-type="fav.engType"
                            :name="fav.name" :cover="fav.cover" :price="fav.price" :stock="fav.stock"></favorites-item>
                    </table>
                    <div class="mobile-wishlist" v-if="favorites">
                        <favorites-item v-for="fav in favorites" :key="fav.id" :id="fav.id" :eng-type="fav.engType"
                            :name="fav.name" :cover="fav.cover" :price="fav.price" :stock="fav.stock"></favorites-item>
                    </div>
                    <p v-else>沒有資料</p>
                </div>
            </div>
        </div>
    </base-card>
</template>

<script>
import favoritesItem from '../member/favoritesItem.vue'
import ordersItem from './OrdersItem.vue'

export default {
    components: {
        favoritesItem,
        ordersItem
    },
    data() {
        return {
            //畫面切換
            nowArea: 'editProfile',
            //編輯會員資料
            owner: '',
            email: '',
            phone: '',
            address: '',
        }
    },
    methods: {
        logout() {
            this.$router.replace('/loggedout')
            return this.$store.dispatch('logout')
        },
        editProfile() {
            this.nowArea = 'editProfile'
        },
        checkOrder() {
            this.nowArea = 'checkOrder'
        },
        checkWishlist() {
            this.nowArea = 'checkWishlist'
        },
        saveProfileChange() {
            this.$store.dispatch('saveProfileChange', {
                owner: this.owner,
                email: this.email,
                phone: this.phone,
                address: this.address
            })
        }
    },
    computed: {
        getOwner() {
            return this.$store.getters.owner
        },
        //檢查登入
        isLoggedIn() {
            return this.$store.getters.logSituation
        },
        getOwnerData() {
            //沒登入
            if (this.isLoggedIn === false) {
                return true
            }
            //有登入
            else {
                return this.$store.getters.profile
            }
        },
        profileCopy() {
            return Object.assign({}, this.$store.getters.profile)
        },
        favorites() {
            const data = this.$store.getters.favorites
            if (data.length > 0 && data !== []) return this.$store.getters.favorites
            else return false
        },
        orders() {
            const data = this.$store.getters.orders
            if (data.length > 0 && data !== []) return this.$store.getters.orders
            else return false
        }
    },
    mounted() {
        this.owner = this.profileCopy.owner,
            this.email = this.profileCopy.email,
            this.phone = this.profileCopy.phone,
            this.address = this.profileCopy.address
    }
}
</script>

<style scoped>
.content-layout {
    margin-bottom: 20px;
}

/*標題 */
h3 {
    font-size: 1.6rem;
}

/*功能列表 */
.feature-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.active {
    background-color: antiquewhite;
}

.feature-list a {
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
}

.area {
    padding: 10px;
    list-style: none;
    border: solid 5px;
    border-color: antiquewhite;
}

/*表格-行 */
.form-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.form-layout input {
    margin: 16px;
}

label {
    display: flex;
}

table {
    width: 100%;
}

.favorites-item-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 20px;
}

td {
    text-align: center;
}

.form-button-layout {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.form-button-layout button {
    background-color: var(--main-color);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 10px;
    border: none;
}

.mobile-order {
    display: none;
}

.logout {
    display: none;
    text-decoration: none;
    background-color: var(--main-color);
    color: white;
    padding: 0 10px;
    border-radius: 10px;
    margin-left: 20px;
}

.mobile-order-table {
    display: none;
}

.mobile-wishlist {
    display: none;
}

@media (max-width: 767px) {
    .logout {
        display: inline-block;
    }

    .form-layout {
        grid-template-columns: 1fr;
    }

    .form-layout input {
        margin: 0;
    }

    p {
        font-size: 0.9rem;
    }

    .order-table {
        display: none;
    }

    .mobile-order-table {
        display: block;
    }

    .mobile-wishlist {
        display: block;
    }

    .pc-wishlist {
        display: none;
    }
}
</style>