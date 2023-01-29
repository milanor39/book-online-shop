import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import TheSwiper from './components/layout/TheSwiper'

import BaseCard from './components/ui/BaseCard'
import BaseBookCard from './components/ui/BaseBookCard'
import BreadCrumb from './components/layout/BreadCrumb'

const app = createApp(App);

app.component('the-swiper', TheSwiper)

app.component('base-card', BaseCard);
app.component('base-book-card', BaseBookCard);
app.component('bread-crumb', BreadCrumb);

app.use(store);
app.use(router);

app.mount('#app');
