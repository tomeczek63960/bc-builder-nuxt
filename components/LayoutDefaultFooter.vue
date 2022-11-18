<template>
  <footer class="footer">
    <div class="container">
      <div v-for="(column, index) in columnsNav" :key="index" class="col">
        <h2 class="headline">{{ column.title }}</h2>
        <ul>
          <li
            v-for="(link, i) in column.links.value.data.navigationLink"
            :key="i"
            class="footer-nav-link"
          >
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div v-for="(infos, n) in columnInfo" :key="n + 10" class="col">
        <h2 class="headline">{{ infos.title }}</h2>
        <div v-for="(info, a) in infos.info" :key="a" class="shop-info">
          <img :src="info.icon" width="27px" />
          <p class="shop-info-content">{{ info.text }}</p>
        </div>
      </div>
      <div v-for="(socials, s) in columnSocial" :key="s + 20" class="col">
        <h2 class="headline">{{ socials.title }}</h2>
        <div class="socials-links">
          <div v-for="(social, o) in socials.social" :key="o">
            <a :href="social.url">
              <img :src="social.icon" width="50px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
  background-color: #0a0f15;
  padding: 3rem 3rem;
}
.footer > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer-logo {
  margin-bottom: 2rem;
}
.footer-about p {
  margin-top: 1rem;
}
.col {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.shop-info {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.shop-info img {
  max-height: 35px;
  width: 30px;
  vertical-align: middle;
  margin-right: 1rem;
}
.headline {
  margin-bottom: 2rem;
}
.footer-nav-link {
  margin-bottom: 1rem;
}
.footer-nav-link a {
  color: #fff;
  text-decoration: none;
}
ul {
  padding: 0;
  list-style-type: none;
}
/* .shop-info-content {
  display: flex;
} */
.newsletter-input {
  margin-top: 1rem;
  background-color: #3c3c3c;
  padding: 0.5rem 1rem;
  max-width: 100%;
}
.newsletter-input::placeholder {
  color: #ffffff;
  border: none;
}
.socials {
  margin-top: 2rem;
}
.socials-links {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.socials-links img {
  max-height: 40px;
}
@media (min-width: 768px) {
  .footer {
    padding: 3rem 3rem;
  }
  .footer > div {
    flex-direction: row;
    justify-content: space-between;
  }
  .col {
    width: calc(25% - 4rem);
    margin-bottom: 0;
  }
}
</style>
