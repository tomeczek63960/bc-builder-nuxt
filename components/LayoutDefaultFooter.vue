<template>
  <div class="container">
    <div class="footer">
      <div v-for="(column, index) in columnsNav" :key="index" class="column">
        <h2>{{ column.title }}</h2>
        <ul>
          <li
            v-for="(link, i) in column.links.value.data.navigationLink"
            :key="i"
          >
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div v-for="(infos, n) in columnInfo" :key="n + 10" class="column">
        <h2>{{ infos.title }}</h2>
        <div v-for="(info, a) in infos.info" :key="a">
          <img :src="info.icon" width="27px" />
          <p>{{ info.text }}</p>
        </div>
      </div>
      <div v-for="(socials, s) in columnSocial" :key="s + 20" class="column">
        <h2>{{ socials.title }}</h2>
        <div v-for="(social, o) in socials.social" :key="o">
          <a :href="social.url">
            <img :src="social.icon" width="50px" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { builder } from '@builder.io/vue';
builder.init('b84bb3fc673840b3870f73bae790a1db');
export default {
  data() {
    return {
      columnsNav: [],
      columnInfo: [],
      columnSocial: []
    };
  },
  async fetch() {
    try {
      const res = await builder.getAll('footer');
      console.log(res);
      this.columnsNav = res[0].data.columnsNav;
      this.columnInfo = res[0].data.columnInfo;
      this.columnSocial = res[0].data.columnSocial;
    } catch (error) {
      console.log('errrror');
    }
  }
};
</script>
<style scoped>
.footer {
  display: flex;
  width: 100%;
}
</style>
