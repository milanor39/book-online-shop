<template>
    <base-card>
        <h2>人文社會</h2>
        <ul>
            <humanities-item v-for="hum in hums" :key="hum.id" v-bind="hum"></humanities-item>
        </ul>
    </base-card>
</template>

<script>
import HumanitiesItem from '@/components/book/HumanitiesItem.vue';
export default {
    components: {
        HumanitiesItem
    },
    computed: {
        hums() {
            return this.$store.getters['books/getHumanities'];
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