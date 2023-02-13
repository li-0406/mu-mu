<script setup>
import { onBeforeMount } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onBeforeMount(() => {
  changeProducts(1);
});
</script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div class="pic"></div>
      </div>
      <div class="col-12 py-3">
        <h4 class="fs-6 lh-lg">
          茶几 ( 咖啡桌 ) 對於習慣在和室生活的日本人來說，<br />
          使用頻率可以說是非常高，<br />
          對於茶几的設計與細節更是趨近挑剔，<br />
          實木茶几較受大眾喜愛。
        </h4>
      </div>
    </div>
  </div>
  <allProduct />
</template>

<style lang="scss" scoped>
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.banner {
  .pic {
    background-image: url("https://images.unsplash.com/photo-1512972972907-6d71529c5e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
    padding-bottom: 35%;
    height: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center -200px;
    @include mobile {
      padding-bottom: 50%;
      background-repeat: repeat;
      background-position: center;
    }
  }
}
</style>
