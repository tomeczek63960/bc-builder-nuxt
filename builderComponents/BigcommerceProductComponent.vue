<template>
  <h1>
    Here bigcommerce product component
    <!-- id produktu z bigcommerca który będzie trzeba pobrać za pomocą funkcji które ten starter udostępnia -->
    {{ product && product.options && product.options.product }}
  </h1>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  }
};
</script>
