<template>
  <section>
    <div class="products">
      <div
        v-for="(item, index) in featuredProducts"
        :key="index"
        class="product"
      >
        <NuxtLink :to="item.path">
          <div class="img-holder">
            <img class="img" :src="item.image" alt="" />
          </div>
          <p>
            <strong>{{ item.name }}</strong>
          </p>
          <p>{{ item.price }}$</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    products: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      productsList: '',
      apiToken: process.env.apiToken
    };
  },
  computed: {
    ...mapGetters('product', ['featuredProducts'])
  },
  async mounted() {
    try {
      this.searchProductById(this.products);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions({
      searchProductById: 'product/searchProductById'
    })
  }
};
</script>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product {
  width: calc(25% - 15px);
  margin-bottom: 50px;
}
.img-holder {
  border-radius: 10px;
  overflow: hidden;
  height: 200px;
  position: relative;
  margin-bottom: 15px;
}
.img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
}
a {
  text-decoration: none;
  color: black;
}
p {
  margin-bottom: 10px;
}
</style>
