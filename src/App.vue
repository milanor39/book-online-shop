<template>
  <div class="page-container">
    <div class="content-wrap">
      <the-header></the-header>
      <router-view />
    </div>
    <div class="footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
}
</script>

<style>
:root {
  --main-color: RGB(27, 109, 193);
}

body {
  margin: 0;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding-bottom: 11.5rem;
  /* Footer height */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 9rem;
  /* Footer height */
}
</style>