<template>
  <section class="banner">
    <div v-for="(item, index) in bannerItems" :key="index" class="banner-item">
      <img :src="item.image" alt="" class="banner-img" />
      <div>
        <h3 v-if="item.heading">{{ item.heading }}</h3>
        <p v-if="item.content">{{ item.content }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    bannerItems: {
      type: Array,
      default: null
    }
  }
};
</script>

<style>
.banner {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.banner-item {
  display: flex;
}
.banner-img {
  padding-right: 20px;
}
</style>
