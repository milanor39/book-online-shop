<template>
  <base-card>
    <div class="banner">
      <the-swiper>
        <template #event1>
          <img :src="eventImg1" alt="event1">
        </template>
        <template #event2>
          <img :src="eventImg2" alt="event2">
        </template>
        <template #event3>
          <img :src="eventImg3" alt="event3">
        </template>
        <template #event4>
          <img :src="eventImg4" alt="event4">
        </template>
        <template #event5>
          <img :src="eventImg5" alt="event5">
        </template>
      </the-swiper>
    </div>

    <base-block>
      <template #newLit>
        <h4 class="title">文學小說</h4>
        <router-link :to="`/literature/${getNewLit.id}`">
          <div class="img-box">
            <img :src="getNewLit.cover" :alt="getNewLit.name">
          </div>
          <p>{{ getNewLit.name }}</p>
        </router-link>
      </template>
      <template #newBusiness>
        <h4 class="title">商業理財</h4>
        <router-link :to="`/business/${getNewBusiness.id}`">
          <div class="img-box">
            <img :src="getNewBusiness.cover" :alt="getNewBusiness.name">
          </div>
          <p>{{ getNewBusiness.name }}</p>
        </router-link>
      </template>
      <template #newArt>
        <h4 class="title">藝術設計</h4>
        <router-link :to="`/art/${getNewArt.id}`">
          <div class="img-box">
            <img :src="getNewArt.cover" :alt="getNewArt.name">
          </div>
          <p>{{ getNewArt.name }}</p>
        </router-link>
      </template>
      <template #newTravel>
        <h4 class="title">旅遊</h4>
        <router-link :to="`/travel/${getNewTravel.id}`">
          <div class="img-box">
            <img :src="getNewTravel.cover" :alt="getNewTravel.name">
          </div>
          <p>{{ getNewTravel.name }}</p>
        </router-link>
      </template>
      <template #newHumanities>
        <h4 class="title">人文社會</h4>
        <router-link :to="`/humanities/${getNewHumanities.id}`">
          <div class="img-box">
            <img :src="getNewHumanities.cover" :alt="getNewHumanities.name">
          </div>
          <p>{{ getNewHumanities.name }}</p>
        </router-link>
      </template>
      <template #newComic>
        <h4 class="title">漫畫</h4>
        <router-link :to="`/comic/${getNewComic.id}`">
          <div class="img-box">
            <img :src="getNewComic.cover" :alt="getNewComic.name">
          </div>
          <p>{{ getNewComic.name }}</p>
        </router-link>
      </template>
      <template #hotLit>
        <h4 class="title">文學小說</h4>
        <router-link :to="`/Literature/${getHotLit.id}`">
          <div class="img-box">
            <img :src="getHotLit.cover" :alt="getHotLit.name">
          </div>
          <p>{{ getHotLit.name }}</p>
        </router-link>
      </template>
      <template #hotBusiness>
        <h4 class="title">商業理財</h4>
        <router-link :to="`/Business/${getHotBusiness.id}`">
          <div class="img-box">
            <img :src="getHotBusiness.cover" :alt="getHotBusiness.name">
          </div>
          <p>{{ getHotBusiness.name }}</p>
        </router-link>
      </template>
      <template #hotArt>
        <h4 class="title">藝術設計</h4>
        <router-link :to="`/Art/${getHotArt.id}`">
          <div class="img-box">
            <img :src="getHotArt.cover" :alt="getHotArt.name">
          </div>
          <p>{{ getHotArt.name }}</p>
        </router-link>
      </template>
      <template #hotHumanities>
        <h4 class="title">人文社會</h4>
        <router-link :to="`/Humanities/${getHotHumanities.id}`">
          <div class="img-box">
            <img :src="getHotHumanities.cover" :alt="getHotHumanities.name">
          </div>
          <p>{{ getHotHumanities.name }}</p>
        </router-link>
      </template>
      <template #hotTravel>
        <h4 class="title">旅行</h4>
        <router-link :to="`/Travel/${getHotTravel.id}`">
          <div class="img-box">
            <img :src="getHotTravel.cover" :alt="getHotTravel.name">
          </div>
          <p>{{ getHotTravel.name }}</p>
        </router-link>
      </template>
      <template #hotComic>
        <h4 class="title">漫畫</h4>
        <router-link :to="`/Comic/${getHotComic.id}`">
          <div class="img-box">
            <img :src="getHotComic.cover" :alt="getHotComic.name">
          </div>
          <p>{{ getHotComic.name }}</p>
        </router-link>
      </template>
      <template #recommendLit>
        <h4 class="title">文學小說</h4>
        <router-link :to="`/Literature/${getRecommendLit.id}`">
          <div class="img-box">
            <img :src="getRecommendLit.cover" :alt="getRecommendLit.name">
          </div>
          <p>{{ getRecommendLit.name }}</p>
        </router-link>
      </template>
      <template #recommendBusiness>
        <h4 class="title">商業理財</h4>
        <router-link :to="`/Business/${getRecommendBusiness.id}`">
          <div class="img-box">
            <img :src="getRecommendBusiness.cover" :alt="getRecommendBusiness.name">
          </div>
          <p>{{ getRecommendBusiness.name }}</p>
        </router-link>
      </template>
      <template #recommendArt>
        <h4 class="title">藝術設計</h4>
        <router-link :to="`/Art/${getRecommendArt.id}`">
          <div class="img-box">
            <img :src="getRecommendArt.cover" :alt="getRecommendArt.name">
          </div>
          <p>{{ getRecommendArt.name }}</p>
        </router-link>
      </template>
      <template #recommendHumanities>
        <h4 class="title">人文社會</h4>
        <router-link :to="`/Humanities/${getRecommendHumanities.id}`">
          <div class="img-box">
            <img :src="getRecommendHumanities.cover" :alt="getRecommendHumanities.name">
          </div>
          <p>{{ getRecommendHumanities.name }}</p>
        </router-link>
      </template>
      <template #recommendTravel>
        <h4 class="title">旅行</h4>
        <router-link :to="`/Travel/${getRecommendTravel.id}`">
          <div class="img-box">
            <img :src="getRecommendTravel.cover" :alt="getRecommendTravel.name">
          </div>
          <p>{{ getRecommendTravel.name }}</p>
        </router-link>
      </template>
      <template #recommendComic>
        <h4 class="title">漫畫</h4>
        <router-link :to="`/Comic/${getRecommendComic.id}`">
          <div class="img-box">
            <img :src="getRecommendComic.cover" :alt="getRecommendComic.name">
          </div>
          <p>{{ getRecommendComic.name }}</p>
        </router-link>
      </template>
    </base-block>
  </base-card>
</template>

<script>
import BaseBlock from '@/components/ui/BaseBlock.vue';
export default {
  data() {
    return {
      eventImg1: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/kinemaPAR513702320.jpg.webp?d=1420',
      eventImg2: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/anjyu3P2A4512.jpg.webp?d=1420',
      eventImg3: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/PA151026263510.jpg.webp?d=1420',
      eventImg4: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/kinemaPAR513592317.jpg.webp?d=1420',
      eventImg5: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/JYUN923_3.jpg.webp?d=1420'
    }
  },
  components: {
    BaseBlock
  },
  computed: {
    //新書
    getNewLit() {
      return this.$store.getters['books/getNewLit'][0]
    },
    getNewBusiness() {
      return this.$store.getters['books/getNewBusiness'][0]
    },
    getNewArt() {
      return this.$store.getters['books/getNewArt'][0]
    },
    getNewComic() {
      return this.$store.getters['books/getNewComic'][0]
    },
    getNewHumanities() {
      return this.$store.getters['books/getNewHumanities'][0]
    },
    getNewTravel() {
      return this.$store.getters['books/getNewTravel'][0]
    },
    //暢銷
    getHotLit() {
      return this.$store.getters['books/getHotLit'][0]
    },
    getHotBusiness() {
      return this.$store.getters['books/getHotBusiness'][0]
    },
    getHotArt() {
      return this.$store.getters['books/getHotArt'][0]
    },
    getHotHumanities() {
      return this.$store.getters['books/getHotHumanities'][0]
    },
    getHotTravel() {
      return this.$store.getters['books/getHotTravel'][0]
    },
    getHotComic() {
      return this.$store.getters['books/getHotComic'][0]
    },
    //推薦
    getRecommendLit() {
      return this.$store.getters['books/getRecommendLit'][0]
    },
    getRecommendBusiness() {
      return this.$store.getters['books/getRecommendBusiness'][0]
    },
    getRecommendArt() {
      return this.$store.getters['books/getRecommendArt'][0]
    },
    getRecommendHumanities() {
      return this.$store.getters['books/getRecommendHumanities'][0]
    },
    getRecommendTravel() {
      return this.$store.getters['books/getRecommendTravel'][0]
    },
    getRecommendComic() {
      return this.$store.getters['books/getRecommendComic'][0]
    }
  }
}
</script>

<style scoped>
.img-box {
  width: 100%;
  height: 15rem;
}

/*封面 */
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.banner {
  width: 100%;
  height: 20vw;
  margin: 10px 0;
}

h2 {
  margin: 20px 0 0 0;
}

.title {
  margin: 10px 0;
  text-align: center;
  font-weight: normal;
}

a {
  text-decoration: none;
  text-align: center;
  color: black;
}

@media(max-width: 992px) {
  .img-box {
    width: 100%;
    height: 11rem;
  }

  p {
    margin: 0;
  }

  .banner {
    height: 27vw;
  }
}
</style>
