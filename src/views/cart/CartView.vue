<template>
    <base-card>
        <h2>購物車</h2>
        <form class="cart-style" v-if="itemInCart.length > 0" @submit.prevent="sendOrder">
            <table class="pc-cart">
                <tr class="cart-list-layout">
                    <th>商品明細</th>
                    <th>單價</th>
                    <th>數量</th>
                    <th>小計</th>
                    <th><br></th>
                </tr>
                <cartItem v-for="item in itemInCart" :key="item.bookId" v-bind="item"></cartItem>
                <tr class="total-layout">
                    <td colspan="4"></td>
                    <td>
                        <p>
                            <span class="total">{{ itemInCart.length }}</span>
                            樣商品，共
                            <span class="total">{{ qtyInCart }}</span>
                            件 總計：
                            <span class="total">{{ totalInCart }}</span>元
                        </p>
                    </td>
                </tr>
            </table>
            <table class="mobile-cart">
                <cartItem v-for="item in itemInCart" :key="item.bookId" v-bind="item"></cartItem>
                <td>
                    <p>
                        <span class="total">{{ itemInCart.length }}</span>
                        樣商品，共
                        <span class="total">{{ qtyInCart }}</span>
                        件 總計：
                        <span class="total">{{ totalInCart }}</span>元
                    </p>
                </td>
            </table>
            <table class="button-layout">
                <button class="sendorder" type="submit">結帳</button>
            </table>
        </form>
        <div v-else>
            <h2>購物車還沒有任何商品</h2>
        </div>
    </base-card>
</template>

<script>
import cartItem from '../../components/cart/CartItem.vue'
export default {
    components: {
        cartItem
    },
    methods: {
        sendOrder() {
            this.$store.dispatch('sendOrder', { items: this.itemInCart, total: this.totalInCart });
            this.$store.dispatch('cart/sendOrder');
            this.$router.replace('/cart/finish');
        }
    },
    computed: {
        totalInCart() {
            return this.$store.getters['cart/totalInCart'];
        },
        itemInCart() {
            return this.$store.getters['cart/itemInCart'];
        },
        qtyInCart() {
            return this.$store.getters['cart/qtyInCart'];
        }
    }
}
</script>

<style scoped>
.cart-style {
    background-color: whitesmoke;
    padding: 20px;
    margin: 20px 0;
}

.cart-list-layout {
    display: grid;
    grid-template-columns: 40% 15% 15% 15% 15%;
}

.total-layout {
    display: grid;
    grid-template-columns: 65% 35%;
}

.total-layout p {
    font-size: 1.2rem;
}

.total {
    font-size: 1.3rem;
    color: red;
}

table {
    width: 100%;
}

.mobile-cart {
    display: none;
}

.sendorder {
    background-color: var(--main-color);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    font-size: 1.2rem;
}


.button-layout {
    display: flex;
    justify-content: center;
}

@media (max-width: 767px) {
    .pc-cart {
        display: none;
    }

    .mobile-cart {
        display: block;
    }
}
</style>