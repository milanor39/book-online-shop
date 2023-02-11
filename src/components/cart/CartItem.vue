<template>
    <tr class="cart-item-layout">
        <td class="product-layout">
            <div class="img-box">
                <img :src="cover" :alt="name" :title="name">
            </div>
            <div class="item-layout">
                <h3>{{ name }}</h3>
            </div>
        </td>
        <td class="item-layout">
            <p>NT$ <span class="price">{{ price }}</span></p>
        </td>
        <td class="item-layout">
            <p>{{ qty }}</p>
        </td>
        <td class="item-layout">
            <p>{{ itemTotal }}</p>
        </td>
        <td class="item-layout">
            <button class="remove" @click.prevent="remove">移除</button>
        </td>
    </tr>
    <tbody class="mobile-cart-item-layout">
        <tr>
            <td>
                <div class="img-box">
                    <img :src="cover" :alt="name" :title="name">
                </div>
            </td>
            <td>
                <h5>{{ name }}</h5>
                <p>NT$ <span class="price">{{ price }}</span></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>數量： {{ qty }}</p>
            </td>
            <td>
                <button class="remove" @click.prevent="remove">移除</button>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: ['bookId', 'name', 'cover', 'price', 'qty'],
    computed: {
        itemTotal() {
            return this.price * this.qty
        }
    },
    methods: {
        remove() {
            this.$store.dispatch('cart/removeProductFromCart', { id: this.bookId });
        }
    }
}
</script>

<style scoped>
li {
    background-color: whitesmoke;
    list-style: none;
}

.cart-item-layout {
    display: grid;
    grid-template-columns: 40% 15% 15% 15% 15%;
    margin-bottom: 20px;
}

.product-layout {
    display: grid;
    grid-template-columns: 30% 70%;
}

.img-box {
    width: 80%;
}

.img-box img {
    object-fit: cover;
    width: 100%;
}

.item-layout {
    text-align: center;
}

.remove {
    margin: 16px 0;
}

.mobile-cart-item-layout {
    display: none;
}

.mobile-cart-item-layout tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.price {
    color: red;
    font-weight: bolder;
}

@media (max-width: 767px) {
    .cart-item-layout {
        display: none;
    }

    .mobile-cart-item-layout {
        display: block;
    }
}
</style>