<script setup>
import { onBeforeMount } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onBeforeMount(() => {
  changeProducts(4);
});
</script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div class="pic position-relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522673422393-6cf38d2b9885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="w-100 position-absolute"
          />
        </div>
      </div>
      <div class="col-12 py-3">
        <h4 class="fs-6 lh-lg">
          床頭櫃上不適合擺放盆栽，<br />
          植物早上會釋放出大量的二氧化碳，<br />
          而盆栽里的肥料，也很容易滋生蟲子、細菌等，<br />
          不利於人體健康。
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
