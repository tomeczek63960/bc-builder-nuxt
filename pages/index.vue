<template>
  <div id="home">
    <div v-if="canShowContent">
      <!-- <div>
        {{ (content && content.data && content.data.title) || 'Unpublished' }}
      </div> -->
      <builder-render-content
        model="page"
        :content="content"
        :api-key="apiKey"
        :customComponents="getRegisteredComponents()"
      />
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { RenderContent, getContent, isPreviewing } from '@builder.io/sdk-vue';
import { REGISTERED_COMPONENTS } from '@builderComponents/init-builder.js';

export default Vue.extend({
  name: 'DynamicallyRenderBuilderPage',
  components: {
    'builder-render-content': RenderContent
  },
  data: () => ({
    canShowContent: false,
    content: null,
    apiKey: process.env.builderPublicApiKey
  }),
  async fetch() {
    const content = await getContent({
      model: 'page',
      apiKey: process.env.builderPublicApiKey,
      userAttributes: {
        urlPath: this.$route.path
      }
    });
    this.canShowContent = content || isPreviewing();
    this.content = content;
    if (!this.canShowContent) {
      if (this.$nuxt.context?.ssrContext?.res) {
        this.$nuxt.context.ssrContext.res.statusCode = 404;
      }
    }
  },
  mounted() {
    this.canShowContent = this.content || isPreviewing();
  },
  methods: {
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    }
  }
});
</script>
