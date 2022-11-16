<template>
  <section class="banner">
    <div v-for="(item, index) in bannerItems" :key="index" class="banner-item">
      <img :src="item.image" alt="" />
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
  },
  mounted() {
    console.log(this.bannerItems);
  }
};
</script>

<style>
.banner {
  display: flex;
}
.banner-item {
  display: flex;
}
</style>
