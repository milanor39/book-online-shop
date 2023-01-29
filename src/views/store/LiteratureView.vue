<template>
    <base-card>
        <h2>文學小說</h2>
        <ul>
            <literature-item v-for="lit in lits" :key="lit.id" :id="lit.id" v-bind="lit"></literature-item>
        </ul>
    </base-card>
</template>

<script>
import LiteratureItem from '@/components/book/LiteratureItem.vue'
export default {
    components: {
        LiteratureItem
    },
    computed: {
        lits() {
            return this.$store.getters['books/getLit'];
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