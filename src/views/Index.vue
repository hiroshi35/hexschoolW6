<template>
  <div class="index">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/products">商品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin/products">Admin</router-link>
    </div>
    <router-view/>
    <div id="footer">
      <router-link to="">fb</router-link> |
      <router-link to="">ig</router-link> |
      <router-link to="">twitter</router-link> |
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

};
</script>

<style scoped>

* {
  color: #F0760F;
  padding: 0px;
  margin: 0px;
}
.index {
  background-color: #442B2E;
  color: #F0760F;
}

#nav a {
  color: #F0760F;
}

#footer {
  /* margin: 100px 0px; */
  padding: 100px 0px;
  background-color: #442B2E;
}

</style>
