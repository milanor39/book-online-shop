<template>
    <base-card>
        <h2>商業理財</h2>
        <ul>
            <business-item v-for="bus in business" :key="bus.id" v-bind="bus"></business-item>
        </ul>
    </base-card>
</template>

<script>
import BusinessItem from '@/components/book/BusinessItem.vue';
export default {
    components: {
        BusinessItem
    },
    computed: {
        business() {
            return this.$store.getters['books/getBusiness'];
        }
    }
}
</script>
<style scoped>
ul {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 0;
}

@media (max-width: 1024px) {
    ul {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 767px) {
    ul {
        display: block;
    }
}
</style>