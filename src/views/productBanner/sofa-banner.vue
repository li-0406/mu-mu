<script setup>
import { onMounted } from "@vue/runtime-core";
import allProduct from "../../components/allProduct.vue";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
onMounted(() => {
  changeProducts(2);
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
          沙發是英文sofa的音譯，<br />
          源於阿拉伯語的soffah，<br />
          意思是「在地上凸起地方鋪上墊子或毯子供人坐」，<br />
          直至1917年，sofa才有椅子的意思。
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
    background-image: url("https://images.unsplash.com/photo-1578112010316-b44c50d27b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
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
