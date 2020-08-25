<template>
  <div class="oneProduct">
    <loading :active.sync="isLoading"></loading>
    <h1>這是{{product.title}}商品的頁面哦</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      isLoading: false,
      product: {},
    };
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    console.log(id);
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.$http.get(url)
      .then((res) => {
        // console.log(res);
        this.isLoading = false;
        this.product = res.data.data;
      });
  },
};
</script>
