<script setup></script>
<template>
  <div class="banner">
    <img
      src="../assets/checkout/tetiana-shyshkina-GjpxfnMOPcA-unsplash.jpg"
      class="w-100"
    />
  </div>
  <router-view></router-view>
</template>
<style scoped lang="scss">
.banner {
  height: 0;
  padding-bottom: 20%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    bottom: -700px;
  }
}
</style>
