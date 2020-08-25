<template>
  <div id="admin">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/products">商品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin/products">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

};
</script>
