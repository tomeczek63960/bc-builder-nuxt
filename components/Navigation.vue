<template>
  <div>
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      class="nav-link"
      >{{ link.name }}</a
    >
  </div>
</template>
<script>
import { builder } from '@builder.io/sdk';
builder.init('b84bb3fc673840b3870f73bae790a1db');
export default {
  name: 'Navigation',
  props: {
    links: Array
  }
};
</script>
