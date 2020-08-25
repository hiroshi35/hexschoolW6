<template>
  <div id="admin">
    <div id="nav">
      <router-link to="/">回前台</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/order">訂單</router-link> |
      <router-link to="/admin/coupon">優惠卷</router-link> |
      <router-link to="/admin/pic">圖庫</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

};
</script>
