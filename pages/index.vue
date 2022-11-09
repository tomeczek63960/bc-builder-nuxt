<template>
  <div id="home" class="container">
    <RenderContent
      model="page"
      :content="content"
      :api-key="apiKey"
      :custom-components="getRegisteredComponents()"
    />
  </div>
</template>

<script>
// this is the previous code block's content
import { RenderContent } from '@builder.io/sdk-vue';
import { REGISTERED_COMPONENTS } from '@builderComponents/init-builder.js';

export default {
  name: 'BuilderContent',
  components: { RenderContent },
  data() {
    return {
      content: null,
      apiKey: process.env.builderPublicApiKey
    };
  },
  methods: {
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    }
  }
};
</script>
