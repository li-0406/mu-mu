<script setup>
import { onMounted } from "@vue/runtime-core";
import allproducts from "../components/allProduct.vue";
import { useHomePage } from "../stores/homepage.js";
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
const { changeProducts, borderLine, search } = useProductsSeries();
const { searchText, index } = storeToRefs(useProductsSeries());
const { check } = useHomePage();
onMounted(() => {
  changeProducts(index.value);
  check(2);
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
          class="search d-flex position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
        >
          <input
            type="text"
            class="border-end-0 border border border-secondary w-75"
            @keyup.enter="search"
            v-model="searchText"
          />
          <button
            class="border-start-0 border border border-secondary"
            @click.prevent="search"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div class="col-12 pt-3">
        <ul
          class="list-unstyled d-flex justify-content-md-evenly flex-wrap fs-6"
        >
          <li>
            <router-link
              class="text-reset text-decoration-none"
              to="/product/"
              @click="changeProducts(1)"
              :class="borderLine(1)"
              >桌子/茶几</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none"
              to="/product/sofa"
              @click="changeProducts(2)"
              :class="borderLine(2)"
              >沙發</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none"
              to="/product/liv"
              @click="changeProducts(3)"
              :class="borderLine(3)"
              >客/餐廳櫃類</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none"
              to="/product/bed"
              @click="changeProducts(4)"
              :class="borderLine(4)"
              >臥房櫃類</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none"
              to="/product/chair"
              @click="changeProducts(5)"
              :class="borderLine(5)"
              >椅/凳子</router-link
            >
          </li>
          <li>
            <router-link
              class="text-reset text-decoration-none"
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

  <router-view></router-view>
</template>
<style scoped lang="scss">
@mixin mobile {
  @media (max-width: 667px) {
    @content;
  }
}
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
    @include mobile {
      width: 33%;
      text-align: center;
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
        transition: 0.8s;
      }
      &:hover::after {
        right: 0%;
        left: 0%;
      }
    }
  }
  .click {
    &::after {
      right: 0%;
      left: 0%;
    }
  }
}
</style>
