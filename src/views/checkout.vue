<script setup></script>
<template>
  <div class="banner d-none d-md-block">
    <img
      src="../assets/checkout/tetiana-shyshkina-GjpxfnMOPcA-unsplash.jpg"
      class="w-100"
    />
  </div>
  <router-view></router-view>
</template>
<style scoped lang="scss">
@mixin pc {
  @media (max-width: 1200px) {
    @content;
  }
}
.banner {
  height: 0;
  padding-bottom: 20%;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    bottom: -700px;
    @include pc {
      bottom: -350px;
    }
  }
}
</style>
