<template>
    <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="img-box">
                <slot name="event1"></slot>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-box">
                <slot name="event2"></slot>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-box">
                <slot name="event3"></slot>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-box">
                <slot name="event4"></slot>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-box">
                <slot name="event5"></slot>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>