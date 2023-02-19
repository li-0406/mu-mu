<script setup>
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
const { details, addCart, buy } = useProductsSeries();
const { productQuantity, alosLike, productPage, mainPic, loading } =
  storeToRefs(useProductsSeries());
onMounted(() => {
  details(useRoute().params.id);
});
const changePic = (item) => {
  mainPic.value = item;
};
const plus = (item) => {
  switch (item) {
    case "plus":
      productQuantity.value++;
      break;
    case "minus":
      if (productQuantity.value <= 1) {
        return (productQuantity.value = 1);
      }
      productQuantity.value--;
      break;
  }
};
</script>
<template>
  <div class="back">
    <!-- 載入畫面 -->
    <div class="load" v-if="loading">
      <div class="m-auto text-center">
        <i
          class="fa-solid fa-chair fa-2x fa-fade mb-1"
          style="
            color: #fff;
            --fa-animation-duration: 2s;
            --fa-fade-opacity: 0.1;
          "
        ></i>
        <p>商品載入中</p>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row gx-5">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link
                  to="/product"
                  class="text-decoration-none text-black"
                  >產品系列</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <a
                  href="#"
                  class="text-decoration-none text-black"
                  @click="$router.go(-1)"
                  >上一頁
                </a>
              </li>
              <li
                class="breadcrumb-item active text-black-50"
                aria-current="page"
              >
                {{ productPage.title }}
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-12 col-md-6 pe-md-5">
          <div class="pic">
            <img :src="mainPic" class="w-100" />
          </div>
          <div class="row pt-3">
            <div
              class="col-4 pb-3"
              v-for="item in productPage.imagesUrl"
              :key="item"
            >
              <div class="pic" role="button" @click="changePic(item)">
                <img :src="item" class="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 ps-md-5">
          <h3>{{ productPage.title }}</h3>
          <h3 class="mb-4 fs-4">NT${{ productPage.price }}</h3>
          <h3 style="white-space: pre-wrap" class="fs-5 lh-base fw-light">
            {{ productPage.content }}
          </h3>
          <p style="white-space: pre-wrap" class="fs-6 mt-4 fw-light">
            {{ productPage.description }}
          </p>
          <div class="input-group my-4 d-flex justify-content-center">
            <button
              type="button"
              class="btn rounded-circle plus"
              @click="plus(`minus`)"
            >
              <i class="fa fa-minus"></i>
            </button>
            <input
              class="text w-25"
              type="number"
              min="1"
              v-model="productQuantity"
            />
            <button
              type="button"
              class="btn rounded-circle plus"
              @click="plus(`plus`)"
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
          <div class="d-flex justify-content-evenly">
            <button
              type="button"
              class="put buy me-1"
              @click="buy(productPage, productQuantity)"
            >
              直接購買
            </button>
            <button
              type="button"
              class="put cart ms-1"
              @click="addCart(productPage, productQuantity)"
            >
              加入購物車
            </button>
          </div>
        </div>
        <div class="col-12 pt-5">
          <h4 class="mb-0 likeTitle">You may also like</h4>
        </div>
        <div class="col-6 col-md-3" v-for="item in alosLike" :key="item.id">
          <div class="text-center card my-3">
            <div class="like" role="button">
              <router-link :to="`/${item.id}`" @click="details(item.id)">
                <img :src="item.imageUrl" class="w-100" />
              </router-link>
            </div>
            <div>
              <router-link
                :to="`/${item.id}`"
                @click="details(item.id)"
                class="text-decoration-none"
              >
                <h3 class="fs-6 pt-2 mb-1">{{ item.title }}</h3>
                <h3 class="fs-6">NT$ {{ item.price }}</h3>
              </router-link>
            </div>
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
.load {
  width: 100%;
  height: 100%;
  background-color: #a0674b;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  display: flex;

  p {
    color: #ffffff;
  }
}
.pic {
  overflow: hidden;
  height: 0;
  padding-bottom: 70%;
}
.put {
  padding: 10px 0;
  width: 45%;
  font-size: 16px;
  border-radius: 16px;
}
.buy {
  border: none;
  background-color: #865031;
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    -webkit-filter: brightness(1.2);
  }
}
.cart {
  border: 1px solid #865031;
  background-color: #ffffff;
  color: #865031;
  transition: 0.3s;
  &:hover {
    background-color: #865031;
    color: #ffffff;
  }
}
.card {
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 12px;
  overflow: hidden;
  .like {
    height: 0;
    padding-bottom: 60%;
    overflow: hidden;

    img {
      transition: 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.likeTitle {
  font-family: "Josefin Sans", sans-serif;
}
.input-group {
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .text {
    border: none;
    background-color: transparent;
    width: 20%;
    font-size: 24px;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  .plus {
    border: 2px solid #9e9e9e;
    background-color: transparent;
    color: #9e9e9e;
    button {
      border: none;
    }
  }
}
</style>
