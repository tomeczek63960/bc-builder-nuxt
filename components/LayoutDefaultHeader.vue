<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <NuxtLink to="/" class="logo">
          <img v-if="image" :src="image" alt="" />
        </NuxtLink>
        <nav class="nav">
          <Navigation :links="links" />
          <Navigation :links="categories" />
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import { builder } from '@builder.io/vue';
import { mapActions, mapGetters } from 'vuex';
import Navigation from '~/components/Navigation';
builder.init('b84bb3fc673840b3870f73bae790a1db');
export default {
  components: { Navigation },
  data() {
    return {
      image: '',
      links: []
      // categoriesLinks: []
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
  },
  computed: {
    ...mapGetters('product', ['categories'])
  },
  mounted() {
    this.getCategories();
    this.categoriesLinks = this.categories;
  },
  methods: {
    ...mapActions({
      getCategories: 'product/getCategories'
    })
  }
};
</script>
<style>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 999;
}
.header > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-fixed {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
.header-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
nav,
.btn {
  margin-top: 1rem;
}
.nav {
  display: flex;
}
.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 1rem;
}
.btn {
  color: #ffffff;
  background-color: #395ece;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}
.btn--primary {
  background-color: #395ece;
}
.btn--secondary {
  background-color: #3c3f47;
  border: 2px solid #ffffff;
}
.buttons a:first-child {
  margin-right: 2rem;
}
@media (min-width: 768px) {
  .header > div {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0;
  }
  .header-left {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
  }
  .logo {
    margin-right: 4rem;
  }
  nav,
  .btn {
    margin-top: 0;
  }
}
@media (min-width: 1024px) {
  .header > div {
    flex-wrap: nowrap;
    width: 100%;
  }
  .header-left {
    margin-bottom: 0;
  }
}
</style>
