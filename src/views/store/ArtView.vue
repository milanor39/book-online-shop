<template>
  <base-card>
    <h2>藝術設計</h2>
    <ul>
      <art-item v-for="art in arts" :key="art.id" v-bind="art"></art-item>
    </ul>
  </base-card>
</template>

<script>
import ArtItem from '@/components/book/ArtItem.vue';
export default {
  components: {
    ArtItem
  },
  computed: {
    arts() {
      return this.$store.getters['books/getArt'];
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