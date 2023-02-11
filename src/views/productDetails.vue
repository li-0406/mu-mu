<script setup>
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
import { onBeforeMount, onMounted, ref } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
const { details, addCart, buy } = useProductsSeries();
const { productQuantity, alosLike, productPage, mainPic } = storeToRefs(
  useProductsSeries()
);

onBeforeMount(() => {
  // productPage.value = JSON.parse(sessionStorage.getItem("product"));
  // alosLike.value = JSON.parse(sessionStorage.getItem("alosLike"));
  details(useRoute().params.id);
});
onMounted(() => {
  console.log(productPage.value);
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
    <div class="container pt-5">
      <div class="row">
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
                  >{{ productPage.category }}</a
                >
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
        <div class="col-6 pe-5">
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
        <div class="col-6 ps-5">
          <h3>{{ productPage.title }}</h3>
          <h3 class="mb-4 fs-4">NT${{ productPage.price }}</h3>
          <h3 style="white-space: pre-wrap" class="fs-5 lh-base fw-light">
            {{ productPage.content }}
          </h3>
          <p style="white-space: pre-wrap" class="fs-6 mt-4 fw-light">
            {{ productPage.description }}
          </p>
          <div class="input-group my-4">
            <span class="rounded-circle minus"
              ><button type="button" class="btn" @click="plus(`minus`)">
                <i class="fa fa-minus"></i></button
            ></span>
            <input
              class="text"
              type="number"
              min="1"
              v-model="productQuantity"
            />
            <span class="rounded-circle plus"
              ><button type="button" class="btn" @click="plus(`plus`)">
                <i class="fa fa-plus"></i></button
            ></span>
          </div>
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
        <div class="col-12 pt-5">
          <h4 class="mb-0 likeTitle">You may also like</h4>
        </div>
        <div class="col-3" v-for="item in alosLike" :key="item.id">
          <div class="text-center p-5">
            <div class="like" role="button">
              <a @click="details(item.id)">
                <img :src="item.imageUrl" class="w-100" />
              </a>
            </div>
            <h3 class="fs-6 pt-2 mb-1">{{ item.title }}</h3>
            <h3 class="mb-4 fs-6">NT${{ item.price }}</h3>
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
.pic {
  overflow: hidden;
  height: 0;
  padding-bottom: 70%;
}
.put {
  padding: 10px 0;
  width: 49%;
  font-size: 16px;
  border-radius: 20px;
}
.buy {
  border: none;
  background-color: #865031;
  color: #ffffff;
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
.like {
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;
}
.likeTitle {
  font-family: "Josefin Sans", sans-serif;
}
.input-group {
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  margin-left: 32%;
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
    border: 2px solid #352b25;
    background-color: transparent;
    button {
      border: none;
    }
  }
  .minus {
    border: 2px solid #352b25;
    background-color: transparent;
    button {
      border: none;
    }
  }
}
</style>
