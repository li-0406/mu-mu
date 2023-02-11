<script setup>
import { ref } from "@vue/reactivity";
import { useHomePage } from "../stores/homepage.js";
import { storeToRefs } from "pinia";
import { onMounted } from "@vue/runtime-core";
const { getCart, putCart, delCart, checkout } = useHomePage();
const { cartData, totlaPrice, on } = storeToRefs(useHomePage());
const openCart = ref("");
const open = () => {
  on.value = !on.value;
  if (on.value) {
    openCart.value = "openCart";
  } else {
    openCart.value = "colseCart";
  }
};
onMounted(() => {
  getCart();
});
document.addEventListener("click", (event) => {
  var cc = document.querySelector(".cart");
  var cDom = document.querySelector(".topCart");
  var tDom = event.target;
  if (
    !(cDom == tDom || cDom.contains(tDom)) ||
    cc == tDom ||
    cc.contains(tDom)
  ) {
    on.value = false;
  }
});
</script>

<template>
  <header
    class="d-flex justify-content-between position-relative"
    data-aos="fade-down"
    data-aos-easing="ease-out"
    data-aos-duration="2000"
  >
    <a href="#"
      ><img src="../assets/logo.png" alt="" class="w-100 h-100 ps-4"
    /></a>
    <div class="pc">
      <ul class="d-flex list-unstyled">
        <li>
          <router-link to="/">首頁</router-link>
        </li>
        <li>
          <router-link to="/product">產品系列</router-link>
        </li>
        <li>
          <a href="">靈感</a>
        </li>
        <li>
          <a href="">品牌理念</a>
        </li>
        <li>
          <a href="">常見問題</a>
        </li>
      </ul>
    </div>
    <div class="pe-3 topCart">
      <a href="" @click.prevent="open" class=""
        ><i class="fa-solid fa-cart-shopping fa-xl"></i>
      </a>
      <div
        class="position-absolute mb-0"
        v-if="cartData && cartData.length > 0"
      ></div>
      <a href=""><i class="fa-solid fa-bars fa-xl ms-4 bars"></i></a>
    </div>
  </header>
  <div
    class="position-absolute p-3 pt-0 cart"
    :class="openCart"
    id="cart"
    v-if="on"
  >
    <h4 class="text-center mt-3 fs-6" v-if="cartData && !cartData.length > 0">
      購物車內尚未有商品
    </h4>
    <div
      class="d-flex top justify-content-between py-3"
      v-for="item in cartData"
      :key="item"
    >
      <div class="pic">
        <img :src="item.product.imageUrl" class="w-100" />
      </div>
      <div class="mx-3 d-flex flex-column justify-content-evenly text-center">
        <h4 class="mb-0">{{ item.product.title }}</h4>
        <h4 class="mb-0">
          {{ item.qty }}&ensp;x&ensp;NT$&nbsp;{{ item.product.price }}
        </h4>
      </div>
      <div class="icon d-flex align-items-center pe-2" @click="delCart(item)">
        <i class="fa-regular fa-trash-can fa-lg" role="button"></i>
      </div>
    </div>
    <div
      class="d-flex justify-content-between mt-2"
      v-if="cartData && cartData.length > 0"
    >
      <h4 class="fs-5">小計:</h4>
      <h4 class="fs-5">NT${{ totlaPrice }}</h4>
    </div>
    <button
      type="button"
      class="mb-2 pay fs-6"
      v-if="cartData && cartData.length > 0"
      @click="checkout"
    >
      訂單結帳
    </button>
  </div>
  <!-- 彈出視窗 -->
  <div
    class="toast align-items-center position-fixed top-0 start-50 translate-middle-x mt-5"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    id="delmsg"
  >
    <div class="d-flex">
      <div class="toast-body fw-light">已從購物車移除</div>
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
@mixin pc {
  @media (max-width: 1200px) {
    @content;
  }
}
header {
  height: 84px;
  font-size: 16px;

  .pc {
    @include pc {
      display: none;
    }
  }
  li {
    a {
      color: #352b25;
      line-height: 84px;
      text-decoration: none;
      margin-right: 80px;
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
  a {
    line-height: 84px;
    .bars {
      display: none;
      @include pc {
        display: inline;
      }
    }
  }
  .topCart {
    color: #ffffff;
  }
}
.cart {
  display: none;
  right: 0;
  z-index: 1;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  border-radius: 0 0 8px 8px;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .top {
    position: relative;
    height: 40%;
    padding-bottom: 60px;
    overflow: hidden;
    h4 {
      font-size: 14px;
    }
    &::after {
      content: "";
      position: absolute;
      border-bottom: 1.5px solid #352b25;
      width: 100%;
      bottom: 0;
    }
    .pic {
      width: 20%;
      height: 0;
      padding-bottom: 15%;
      overflow: hidden;
    }
  }
}
.openCart {
  display: block;
}
.closeCart {
  display: none;
}
.pay {
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 12px;
  background-color: #865031;
  color: #ffffff;
}
.toast {
  z-index: 3;
}
.topCart {
  div {
    top: 35%;
    left: 45%;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #dd534a;
  }
}
</style>
