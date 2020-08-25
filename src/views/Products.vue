<template>
  <div class="home container">
    <loading :active.sync="isLoading"></loading>
    <h2>產品列表的啦</h2>
    <div v-for="item in products" :key="item.id" style="display: inline-block;">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="item.imageUrl[0]" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.content}}</p>
          <router-link :to="`/product/${item.id}`">商品介紹</router-link>
          <!-- <button class="btn btn-primary">詳細介紹</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      isLoading: false,
      products: [
        {
          id: 1586934917210,
          unit: '條',
          category: '法國麵包',
          title: '跟你一樣長的法國麵包',
          origin_price: 100,
          price: 80,
          description: '過來嚐嚐我又長又硬的法國麵包',
          content: '又硬又長',
          enabled: 1,
          imageUrl: ['https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80'],
        },
      ],
    };
  },
  props: {},
  methods: {},
  created() {
    this.isLoading = true;
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`;
    this.$http.get(url)
      .then((res) => {
        // console.log(res);
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
