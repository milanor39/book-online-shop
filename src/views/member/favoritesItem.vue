<template>
    <tr class="favorites-item-layout">
        <td class="product-layout">
            <router-link class="img-box" :to="`/${engType}/${id}`">
                <img :src="cover" :alt="name" :title="name">
            </router-link>
            <p>
                <router-link :to="`/${engType}/${id}`">{{ name }}</router-link>
            </p>
        </td>
        <td class="item-layout">
            <p>{{ price }}</p>
        </td>
        <td class="item-layout">
            <p>{{ stock > 0 ? '有' : '無' }}</p>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['id', 'engType', 'name', 'cover', 'price', 'stock']
}
</script>

<style scoped>
.favorites-item-layout {
    display: grid;
    grid-template-columns: 60% 20% 20%;
    margin-bottom: 20px;
}

.product-layout {
    display: flex;
}

.img-box {
    width: 100px;
}

.img-box img {
    object-fit: cover;
    width: 100%;
}

td {
    text-align: center;
}

a {
    text-decoration: none;
    color: black;
}
</style>
