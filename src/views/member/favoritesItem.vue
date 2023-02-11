<template>
    <tr class="pc-layout">
        <td class="product-layout">
            <router-link class="img-box" :to="`/${engType}/${id}`">
                <img :src="cover" :alt="name" :title="name">
            </router-link>
            <p>
                <router-link :to="`/${engType}/${id}`">{{ name }}</router-link>
            </p>
        </td>
        <td>
            <p>NT$ <span class="price">{{ price }}</span></p>
        </td>
        <td>
            <p>{{ stock > 0 ? '有' : '無' }}</p>
        </td>
        <td>
            <button @click.prevent="wishlistToCart" :disabled="stock <= 0 ? true : false">加入購物車</button>
            <button @click.prevent="removeWishlist">刪除</button>
        </td>
    </tr>
    <table class="mobile-layout">
        <tr>
            <td class="title">商品名稱</td>
            <td class="content">{{ name }}</td>
        </tr>
        <tr>
            <td class="title">價格</td>
            <td class="content">NT$ <span class="price">{{ price }}</span></td>
        </tr>
        <tr>
            <td class="title">庫存</td>
            <td class="content">{{ stock > 0 ? '有' : '無' }}</td>
        </tr>
        <tr class="action">
            <td colspan="2">
                <button @click.prevent="wishlistToCart" :disabled="stock <= 0 ? true : false">加入購物車</button>
                <button @click.prevent="removeWishlist">刪除</button>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: ['id', 'engType', 'name', 'cover', 'price', 'stock'],
    methods: {
        removeWishlist() {
            this.$store.dispatch('removeWishlist', { id: this.id })
        },
        wishlistToCart() {
            this.$store.dispatch('cart/wishlistToCart', { id: this.id, name: this.name, cover: this.cover, price: this.price });
            this.removeWishlist()
        }
    }
}
</script>

<style scoped>
.product-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.pc-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 20px;
}

.pc-layout td {
    text-align: center;
}

.img-box {
    width: 100px;
}

.img-box img {
    object-fit: cover;
    width: 100%;
}

.title {
    font-weight: bolder;
    font-size: 0.8rem;
    width: 60px;
}

.content {
    font-size: 0.8rem;
}

a {
    text-decoration: none;
    color: black;
}

button {
    margin: 16px 10px;
}

.mobile-layout {
    display: none;
    background-color: whitesmoke;
    margin: 10px 0;
    padding: 10px;
}

.action {
    width: 100%;
    display: flex;
    justify-content: center;
}

.price {
    color: red;
    font-weight: bolder;
}

@media (max-width: 767px) {
    .img-box {
        display: none;
    }

    .pc-layout {
        display: none;
    }

    .mobile-layout {
        display: block;
    }
}
</style>
