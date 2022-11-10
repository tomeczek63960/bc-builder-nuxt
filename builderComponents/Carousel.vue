<template>
  <section v-swiper="swiperOption" class="banners">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slider" :key="index" class="swiper-slide">
        <img :src="slide.image" class="banner__img" alt="alt" />
      </div>
    </div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </section>
</template>

<script>
export default {
  props: {
    slider: {
      type: Object
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-slide {
  height: 70vh;
  overflow: hidden;
  margin-bottom: 30px;
}
img {
  object-fit: cover;
  min-width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
