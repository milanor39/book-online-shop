<template>
    <base-card>
        <h2>漫畫</h2>
        <ul>
            <comic-item v-for="comic in comics" :key="comic.id" v-bind="comic"></comic-item>
        </ul>
    </base-card>
</template>

<script>
import ComicItem from '@/components/book/ComicItem.vue';
export default {
    components: {
        ComicItem
    },
    computed: {
        comics() {
            return this.$store.getters['books/getComic'];
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