<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="category">
    CATEGORIA
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="navbar section">
      <div class="navbar__aside desktop-only">
        <SfHeading :level="3" title="Categories" class="navbar__title" />
      </div>
      <div class="navbar__main">
        <div class="navbar__counter">
          <span class="navbar__label desktop-only">Products found: </span>
          <span class="desktop-only">{{ products.length }}</span>
          <span class="navbar__label smartphone-only"
            >{{ products.length }} Items</span
          >
        </div>
        <div class="navbar__view">
          <span class="navbar__view-label desktop-only">View</span>
          <SfIcon
            class="navbar__view-icon"
            :color="'#43464E'"
            icon="tiles"
            size="12px"
            role="button"
            aria-label="Change to grid view"
            :aria-pressed="isGridView"
            @click="isGridView = true"
          />
          <SfIcon
            class="navbar__view-icon"
            :color="'#43464E'"
            icon="list"
            size="12px"
            role="button"
            aria-label="Change to list view"
            :aria-pressed="!isGridView"
            @click="isGridView = false"
          />
        </div>
      </div>
    </div>
    <div class="main section">
      <div v-if="sidebarAccordion.length > 0" class="sidebar desktop-only">
        <SfAccordion :open="sidebarAccordion[0].header" :show-chevron="true">
          <SfAccordionItem
            v-for="(accordion, i) in sidebarAccordion"
            :key="i"
            :header="accordion.header"
          >
            <SfList class="list">
              <SfListItem
                v-for="(item, j) in accordion.items"
                :key="j"
                class="list__item"
              >
                <SfMenuItem
                  :label="item.label"
                  :count="item.count"
                  @click="handleSidebar(item.link)"
                />
              </SfListItem>
            </SfList>
          </SfAccordionItem>
        </SfAccordion>
      </div>
      <div class="products">
        <transition-group
          v-if="isGridView"
          appear
          name="products__slide"
          tag="div"
          class="products__grid"
        >
          <SfProductCard
            v-for="(product, i) in products"
            :key="product.id"
            :style="{ '--index': i }"
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :score-rating="product.rating.score"
            :show-add-to-cart-button="true"
            wishlist-icon=""
            class="products__product-card"
            @click="gotoProduct(product)"
            @mouseover="handleProductHover(product.id)"
            @mouseout="handleProductHover(product.id)"
            @click:add-to-cart="addToCart(1, product.id)"
          >
            <template v-if="product.isCartableOnCategoryPage" #add-to-cart>
              <div class="product_add_to_cart">
                <SfButton
                  v-if="hoveredProduct === product.id"
                  :link="'/products' + product.path"
                  class="products__choose-options"
                  >Choose Options</SfButton
                >
              </div>
            </template>
          </SfProductCard>
        </transition-group>
        <transition-group
          v-else
          appear
          name="products__slide"
          tag="div"
          class="products__list"
        >
          <SfProductCardHorizontal
            v-for="(product, i) in products"
            :key="product.id"
            :qty="getQuantity(product.id)"
            :style="{ '--index': i }"
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :reviews-count="product.reviewsCount"
            :score-rating="product.rating.score"
            :link="'/products' + product.path"
            class="products__product-card-horizontal"
            @click:add-to-cart="addToCart(getQuantity(product.id), product.id)"
            @input="(e) => handleProductQuantity(e, product.id)"
          >
            <template #description>
              <p
                class="sf-product-card-horizontal__description desktop-only"
                v-html="product.description"
              />
            </template>
            <template v-if="product.isCartableOnCategoryPage" #add-to-cart>
              <div class="product_add_to_cart">
                <SfButton
                  :link="'/products' + product.path"
                  class="products__choose-options"
                  >Choose Options</SfButton
                >
              </div>
            </template>
          </SfProductCardHorizontal>
        </transition-group>
        <SfPagination
          class="products__pagination"
          :current="1"
          :total="1"
          :visible="0"
        >
          <template #prev>
            <SfButton class="sf-arrow--transparent" @click="handlePage('prev')">
              <SfIcon icon="arrow_left" size="1.125rem" />
            </SfButton>
          </template>
          <template #next>
            <SfButton class="sf-arrow--transparent" @click="handlePage('next')">
              <SfIcon icon="arrow_right" size="1.125rem" />
            </SfButton>
          </template>
        </SfPagination>
        <div class="products__show-on-page desktop-only">
          <span class="products__show-on-page__label">Show on page:</span>
          <SfSelect
            v-model="showProductNumber"
            class="products__items-per-page"
            @input="handleShowPage"
          >
            <SfSelectOption
              v-for="option in showNumbersOnPage"
              :key="option"
              :value="option"
              class="products__items-per-page__option"
            >
              {{ option }}
            </SfSelectOption>
          </SfSelect>
        </div>
      </div>
      <CartSidebar :is-cart-sidebar-open="isCartSidebarOpen"></CartSidebar>
    </div>
    <builder-render-content
      model="page"
      :content="content"
      :api-key="apiKey"
      :custom-components="getRegisteredComponents()"
    />
  </div>
</template>
<script>
import { RenderContent, getContent, isPreviewing } from '@builder.io/sdk-vue';
import { REGISTERED_COMPONENTS } from '@builderComponents/init-builder.js';
import {
  SfHeading,
  SfButton,
  SfList,
  SfIcon,
  SfMenuItem,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfBreadcrumbs,
  SfSelect
} from '@storefront-ui/vue';
import { mapActions, mapGetters } from 'vuex';
import CartSidebar from '@/components/CartSidebar';
import { productsBreadcrumbs } from '~/constants';
export default {
  components: {
    SfHeading,
    SfButton,
    SfIcon,
    SfList,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfBreadcrumbs,
    SfSelect,
    CartSidebar,
    'builder-render-content': RenderContent
  },
  data() {
    return {
      productQtys: [],
      isGridView: true,
      category: this.$route.params.slug,
      sidebarAccordion: [],
      showNumbersOnPage: ['5', '10', '20'],
      breadcrumbs: productsBreadcrumbs,
      hoveredProduct: null,
      isCartSidebarOpen: false,
      showProductNumber: '10',
      canShowContent: false,
      content: null,
      apiKey: process.env.builderPublicApiKey
    };
  },
  async fetch() {
    const content = await getContent({
      model: 'page',
      apiKey: process.env.builderPublicApiKey,
      userAttributes: {
        urlPath: '/categories/shop-all/'
      }
    });
    console.log(content);
    this.canShowContent = content || isPreviewing();
    this.content = content;
    if (!this.canShowContent) {
      if (this.$nuxt.context?.ssrContext?.res) {
        this.$nuxt.context.ssrContext.res.statusCode = 404;
      }
    }
  },
  computed: {
    ...mapGetters('product', ['categories', 'products', 'showOnPage'])
  },
  watch: {
    categories(val) {
      this.sidebarAccordion = [
        {
          header: 'Products',
          items: val.map((item) => ({
            label: item.name,
            count: item.productCount,
            link: item.path
          }))
        }
      ];
    }
  },
  mounted() {
    this.getProductsByCategory({ path: '/' + this.$route.params.slug });
    this.getCategories();
    this.canShowContent = this.content || isPreviewing();
  },
  methods: {
    ...mapActions({
      getCategories: 'product/getCategories',
      getProductsByCategory: 'product/getProductsByCategory'
    }),
    handleSidebar(path) {
      this.getProductsByCategory({ path });
    },
    gotoProduct(product) {
      this.$router.push('/products' + product.path);
    },
    handleShowPage(e) {
      this.$store.commit('product/SET_SHOW_ON_PAGE', e);
      this.$store.dispatch('product/getProductsByCategory');
    },
    handlePage(action) {
      this.$store.dispatch('product/getProductsByCategory', { page: action });
    },
    addToCart(qty, id) {
      this.isCartSidebarOpen = true;
      this.$store.dispatch('carts/addToCart', {
        quantity: qty,
        product_id: id
      });
    },
    handleProductQuantity(quantity, productId) {
      const obj = this.productQtys.find((data) => data.productId === productId);
      if (obj) obj.quantity = quantity;
      else this.productQtys.push({ quantity, productId });
    },
    getQuantity(id) {
      const qty = this.productQtys.find(({ productId }) => productId === id)
        ?.quantity;
      return qty ?? 1;
    },
    handleProductHover(id) {
      this.hoveredProduct = id;
    },
    handleSidebarOpen() {
      this.isCartSidebarOpen = false;
    },
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    }
  }
};
</script>
<style src="~/assets/sass/pages/products.scss" lang="scss" scoped></style>
