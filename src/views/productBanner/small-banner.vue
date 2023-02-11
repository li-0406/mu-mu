<script setup>
import { onBeforeMount } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onBeforeMount(() => {
  changeProducts(6);
});
</script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div class="pic position-relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550535424-b498819c412f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            class="w-100 position-absolute"
          />
        </div>
      </div>
      <div class="col-12 py-3">
        <h4 class="fs-6 lh-lg">
          知名玩具公司"樂高"其實是由木製玩具起家的，<br />
          創始人原先是一名木匠，<br />
          自己用先前做家具的木材做了一個玩具給孩子們玩後，<br />
          忽然發現也許可以改做木製玩具來賣。
        </h4>
      </div>
    </div>
  </div>
  <allProduct />
</template>

<style lang="scss" scoped>
.banner {
  .pic {
    padding-bottom: 35%;
    img {
      bottom: -200px;
    }
  }
}
</style>
