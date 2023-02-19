<script setup>
import { onMounted } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onMounted(() => {
  changeProducts(5);
});
</script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div
          class="pic"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="500"
        ></div>
      </div>
      <div class="col-12 py-3">
        <h4
          class="fs-6 lh-lg"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          椅子的前身為凳，<br />
          到宋代時，<br />
          當時的古人動手給它加上了靠背，<br />
          就此出現椅子。
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
    background-image: url("https://images.unsplash.com/photo-1465224414649-ceb7f1db3999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    padding-bottom: 35%;
    height: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    @include mobile {
      padding-bottom: 50%;
      background-repeat: repeat;
      background-position: center;
    }
  }
}
</style>
