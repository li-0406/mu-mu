<script setup>
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
const { product } = storeToRefs(useProductsSeries());
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="item in product" :key="item.id">
        <div class="productPic p-5 pb-2">
          <a href="">
            <img :src="item.imageUrl" class="w-100" />
          </a>
        </div>
        <div class="productText d-flex position-relative">
          <div class="name ms-5">
            <h4 class="fs-5">{{ item.title }}</h4>
            <h4 class="fs-5">NT${{ item.price }}</h4>
          </div>
          <button
            class="position-absolute top-50 end-0 translate-middle-y me-5 fs-6 p-2 rounded-3"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productPic {
  a {
    display: block;
    overflow: hidden;
    height: 0;
    padding-bottom: 70%;
    img {
      transition: 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
.productText {
  button {
    background-color: #ffffff;
    border: 1px solid #865031;
    color: #865031;
    transition: 0.5s;
    &:hover {
      background-color: rgba(134, 80, 49, 0.09);
    }
  }
}
</style>
