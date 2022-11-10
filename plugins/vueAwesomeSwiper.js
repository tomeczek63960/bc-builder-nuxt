import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectFade
} from 'swiper/swiper.esm.js';
SwiperClass.use([Pagination, Navigation, Mousewheel, Autoplay, EffectFade]);

Vue.use(VueAwesomeSwiper);
