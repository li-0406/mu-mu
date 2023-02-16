<script setup>
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
import { useLoading } from "vue-loading-overlay";
const { like, addCart } = useProductsSeries();
const { product } = storeToRefs(useProductsSeries());
const $loading = useLoading();
const fullPage = ref(false);
const submit = () => {
  const loader = $loading.show({
    backgroundColor: "",
  });
  setTimeout(() => {
    loader.hide();
  }, 5000);
};
</script>

<template>
  <div class="back pb-5">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-4"
          v-for="item in product"
          :key="item.id"
        >
          <div class="productPic pt-4 p-md-2 pb-2 p-xl-5 pb-xl-2">
            <router-link :to="`/${item.id}`">
              <img :src="item.imageUrl" class="w-100" />
            </router-link>
          </div>
          <div
            class="productText d-flex justify-content-between px-md-2 px-xl-5"
          >
            <div class="name">
              <h4 class="fs-5 fs-sm-1">{{ item.title }}</h4>
              <h4 class="fs-5">NT$ {{ item.price }}</h4>
            </div>
            <a
              href="#"
              class="d-block my-auto me-2"
              @click.prevent="addCart(item)"
            >
              <i class="fa-solid fa-cart-plus fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 彈出視窗 -->
  <div
    class="toast align-items-center position-fixed top-0 start-50 translate-middle-x mt-5"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    id="toast"
  >
    <div class="d-flex">
      <div class="d-flex align-items-center ms-2">
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <div class="toast-body fw-light">已加入購物車</div>
      <button
        type="button"
        class="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back {
  background-color: #fff9f3;
}
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
.toast {
  z-index: 3;
  background-color: #ffffff;
  border: none;
}
</style>
