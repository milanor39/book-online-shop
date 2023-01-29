<template>
    <base-card>
        <h2>旅遊</h2>
        <ul>
            <travel-item v-for="travel in travels" :key="travel.id" v-bind="travel"></travel-item>
        </ul>
    </base-card>
</template>

<script>
import TravelItem from '@/components/book/TravelItem.vue';
export default {
    components: {
        TravelItem
    },
    computed: {
        travels() {
            return this.$store.getters['books/getTravel'];
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