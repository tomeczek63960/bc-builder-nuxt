<template>
  <header>
    <img v-if="image" :src="image" alt="" />
    <Navigation :links="links" />
  </header>
</template>
<script>
import { builder } from '@builder.io/vue';
import Navigation from '~/components/Navigation';
builder.init('b84bb3fc673840b3870f73bae790a1db');
export default {
  components: { Navigation },
  data() {
    return {
      image: '',
      links: []
    };
  },
  async fetch() {
    try {
      const res = await builder.getAll('header-test');
      this.image = res[0].data.image;
      this.links = res[0].data.navigationtest.value.data.navigationLink;
    } catch (error) {
      console.log('errrror');
    }
    console.log(this.links);
  }
};
</script>
<style>
header {
  display: flex;
}
</style>
