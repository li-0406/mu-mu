<script setup>
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
import { ref } from "@vue/reactivity";
const { like, addCart } = useProductsSeries();
const { product, loading } = storeToRefs(useProductsSeries());
</script>

<template>
  <div class="container">
    <div class="row gx-5 pb-5">
      <div
        class="col-12 col-sm-6 col-md-6 col-lg-3"
        v-for="item in product"
        :key="item.id"
      >
        <div class="card mt-5">
          <div class="productPic">
            <router-link :to="`/${item.id}`">
              <img :src="item.imageUrl" class="w-100" />
            </router-link>
          </div>
          <div class="productText d-flex justify-content-between ps-3 py-2">
            <router-link :to="`/${item.id}`" class="text-decoration-none">
              <div class="name">
                <h4 class="fs-6 fs-sm-1">{{ item.title }}</h4>
                <h4 class="fs-6 mb-0">NT$ {{ item.price }}</h4>
              </div>
            </router-link>

            <a
              href="#"
              class="d-block my-auto pe-3"
              @click.prevent="addCart(item)"
              style="color: #352b25"
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
.card {
  border: none;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.productPic {
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  a {
    display: block;
    overflow: hidden;
    height: 0;
    padding-bottom: 70%;
    position: relative;
  }
  img {
    position: absolute;
    height: 100%;
    transition: 1s;
    &:hover {
      transform: scale(1.1);
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
