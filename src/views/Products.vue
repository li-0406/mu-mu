<script setup>
import { onMounted } from "@vue/runtime-core";
import allproducts from "../components/allProduct.vue";
import { useProductsSeries } from "../stores/productSeries.js";
const { changeProducts, borderLine } = useProductsSeries();
onMounted(() => {
  changeProducts(1);
});
</script>
<template>
  <!-- header -->
  <div class="container header">
    <div class="row">
      <div class="col-12 d-flex position-relative pt-5">
        <div class="title mx-auto text-center">
          <h1 class="mb-0">PRODUCT</h1>
          <p class="fs-3">產品系列</p>
        </div>
        <form
          class="search d-flex position-absolute top-50 end-0 translate-middle-y"
        >
          <input
            type="text"
            class="border-end-0 border border border-secondary"
          />
          <button class="border-start-0 border border border-secondary">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div class="col-12 pt-3">
        <ul class="list-unstyled d-flex justify-content-evenly fs-6">
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/"
              @click="changeProducts(1)"
              :class="borderLine(1)"
              >桌子/茶几</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/sofa"
              @click="changeProducts(2)"
              :class="borderLine(2)"
              >沙發</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/liv"
              @click="changeProducts(3)"
              :class="borderLine(3)"
              >客/餐廳櫃類</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/bed"
              @click="changeProducts(4)"
              :class="borderLine(4)"
              >臥房櫃類</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/chair"
              @click="changeProducts(5)"
              :class="borderLine(5)"
              >椅/凳子</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none mx-auto"
              to="/product/small"
              @click="changeProducts(6)"
              :class="borderLine(6)"
              >木製小物</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- banner -->
  <router-view></router-view>
  <!-- product -->
  <allproducts />
</template>
<style scoped lang="scss">
// header
.header {
  .title {
    h1 {
      font-family: "Josefin Sans", sans-serif;
    }
  }
  .search {
    * {
      padding: 2px 0;
      background-color: #ffffff;
      &:focus {
        outline: none;
      }
    }
    input {
      border-radius: 20px 0 0 20px;
      padding-left: 15px;
    }
    button {
      border-radius: 0 20px 20px 0;
      padding-right: 15px;
    }
  }
  li {
    .click {
      &::after {
        right: 0%;
        left: 0%;
      }
    }
    a {
      line-height: 84px;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        right: 50%;
        left: 50%;
        bottom: -5px;
        border-bottom: 2px solid #865031;
        transition: 0.6s;
      }
      &:hover::after {
        right: 0%;
        left: 0%;
      }
    }
  }
}
// banner

// product
</style>
