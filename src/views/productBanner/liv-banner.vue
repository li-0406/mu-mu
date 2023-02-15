<script setup>
import { onMounted } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onMounted(() => {
  changeProducts(3);
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
          隨著電視相關的電器設備相應出現，<br />
          導致電視櫃的用途從單一向多元化發展，<br />
          不再是單一的擺放電視用途，<br />
          更兼顧展示的用途。
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
    background-image: url("https://images.unsplash.com/photo-1545454760-3d9956061274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
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
