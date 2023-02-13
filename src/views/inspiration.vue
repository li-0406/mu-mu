<script setup>
import { onMounted } from "@vue/runtime-core";
import allproducts from "../components/allProduct.vue";
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
const { changeProducts, borderLine, search } = useProductsSeries();
const { searchText, index } = storeToRefs(useProductsSeries());
onMounted(() => {
  changeProducts(index.value);
});
</script>
<template>
  <div class="back">
    <div class="container header">
      <div class="row">
        <div class="col-12 d-flex position-relative pt-5">
          <div class="title mx-auto text-center">
            <h1 class="mb-0">INSPIRATION</h1>
            <p class="fs-3">靈感</p>
          </div>
        </div>
        <div class="col-12 d-flex py-5">
          <div class="mx-auto text-center">
            <h2 class="fs-3">一切隨心，用心去感悟空間</h2>
            <h3 class="fs-6 fw-light lh-lg pt-3">
              將設計與空間融合，<br />
              用大眾化且簡單的方式融入我們所居住的空間中，<br />
              設計源於生活，生活因設計而改變，成就空間和諧，<br />
              讓設計物有所值，讓細節締造完美。
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
  <!-- header -->
</template>
<style scoped lang="scss">
@mixin mobile {
  @media (max-width: 667px) {
    @content;
  }
}
.back {
  background-color: #c1c1c1;
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
