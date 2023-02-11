<template>
    <table class="pc-list">
        <td class="style">
            <p>{{ orderId }}</p>
        </td>
        <td>
            <ul class="product-detail">
                <li v-for="bk in product" :key="bk.bookId">
                    <p>{{ bk.name }}</p>
                    <p>{{ bk.qty }}本</p>
                </li>
            </ul>
        </td>
        <td class="style">
            NT$ <span class="price">{{ total }}</span>
        </td>
    </table>
    <table class="mobile-list">
        <tbody>
            <tr>
                <td class="title">訂單編號</td>
                <td class="content">{{ orderId }}</td>
            </tr>
        </tbody>
        <tbody v-for="bk in product" :key="bk.bookId">
            <tr>
                <td class="title">商品名稱</td>
                <td class="content">{{ bk.name }}</td>
            </tr>
            <tr>
                <td class="title">數量</td>
                <td class="content">{{ bk.qty }}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td class="title">總金額</td>
                <td class="content">NT$ <span class="price">{{ total }}</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['orderId', 'product', 'total']
}
</script>

<style scoped>
.product-detail {
    padding: 0;
    margin: 0;
}

.product-detail li {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.mobile-list {
    display: none;
    background-color: whitesmoke;
    margin: 10px 0;
    table-layout: fixed;
    padding: 10px;
}

.mobile-list td:nth-child(1) {
    width: 200px;
}

.mobile-list td:nth-child(2) {
    width: 300px;
}

.title {
    font-weight: bolder;
    font-size: 0.8rem;
}

.content {
    font-size: 0.8rem;
}

.pc-list {
    background-color: whitesmoke;
    margin: 10px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.pc-list .style {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pc-list p {
    text-align: center;
}

.price {
    color: red;
    font-weight: bolder;
}

@media (max-width: 767px) {
    .pc-list {
        display: none;
    }

    .mobile-list {
        display: block;
    }
}
</style>