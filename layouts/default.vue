<template>
  <client-only>
    <div>
      <LayoutDefaultHeader />
      <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
      <LayoutDefaultFooter />
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex';
import LayoutDefaultHeader from '@/components/LayoutDefaultHeader';
import LayoutDefaultFooter from '@/components/LayoutDefaultFooter';
export default {
  components: {
    LayoutDefaultHeader,
    LayoutDefaultFooter
  },
  middleware: 'authenticated',
  data() {
    return {
      footerColumns: [
        {
          title: 'About us',
          items: ['Who we are']
        },
        {
          title: 'Departments',
          items: ['Home']
        },
        {
          title: 'Help',
          items: ['Contact us']
        },
        {
          title: 'Payment & delivery',
          items: ['Purchase terms']
        }
      ]
    };
  },
  head() {
    return {
      title: this.seo.page_title || process.env.npm_package_name || '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo.meta_description || ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seo.meta_keywords || ''
        }
      ]
    };
  },
  computed: {
    ...mapGetters('storefront', ['seo'])
  },
  mounted() {
    this.$store.dispatch('storefront/getStorefrontSeo');
  }
};
</script>
<style src="~/assets/sass/layouts/default.scss" lang="scss"></style>
