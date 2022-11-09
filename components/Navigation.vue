<template>
  <div>
    <div v-for="link in links" :key="link.name">{{ link.name }}</div>
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
