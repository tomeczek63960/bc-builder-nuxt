<template>
  <section>
    <div v-for="(item, index) in bannerItems" :key="index">
      <img :src="item.image" alt="" />
      <h3 v-if="item.heading">{{ item.heading }}</h3>
      <p v-if="item.content">{{ item.content }}</p>
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
