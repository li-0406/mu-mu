<script setup>
import { ref } from "@vue/reactivity";
import { useHomePage } from "../stores/homepage.js";
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
import { onMounted } from "@vue/runtime-core";
import navigation from "./navigation.vue";
const { putCart, delCart, checkout, check, bottomLine, open } = useHomePage();
const { openCart, on, openNav, onNav } = storeToRefs(useHomePage());
const { getCart } = useProductsSeries();
const { cartData, totlaPrice } = storeToRefs(useProductsSeries());
const show = () => {
  document.addEventListener("click", () => {
    openCart.value = "colseCart";
    on.value = false;
    openNav.value = "colseCart";
    onNav.value = false;
  });
};

onMounted(() => {
  getCart();
  show();
});
</script>

<template>
  <header
    class="d-flex justify-content-between"
    data-aos="fade-down"
    data-aos-easing="ease-out"
    data-aos-duration="2000"
  >
    <a href="#"
      ><img src="../assets/logo.png" alt="" class="w-100 h-100 ps-4"
    /></a>
    <div class="pc d-none d-lg-block">
      <ul class="d-flex list-unstyled">
        <li class="me-5">
          <router-link to="/" :class="bottomLine(1)" @click="check(1)"
            >首頁</router-link
          >
        </li>
        <li class="mx-5">
          <router-link to="/product" :class="bottomLine(2)" @click="check(2)"
            >產品系列</router-link
          >
        </li>
        <li class="mx-5">
          <router-link
            to="/inspiration"
            :class="bottomLine(3)"
            @click="check(3)"
            >靈感</router-link
          >
        </li>
        <li class="mx-5">
          <router-link
            to="/brandConcept"
            :class="bottomLine(4)"
            @click="check(4)"
            >品牌理念</router-link
          >
        </li>
        <li class="ms-5">
          <router-link
            to="/maintainance"
            :class="bottomLine(5)"
            @click="check(5)"
            >保養方式</router-link
          >
        </li>
      </ul>
    </div>
    <div class="pe-3 topCart d-flex">
      <a href="" class="d-inline d-lg-none" style="color: #352b25">
        <i class="fa-solid fa-magnifying-glass fa-xl search"></i>
      </a>
      <a
        href="javascript:;"
        @click.stop="open(`cart`)"
        class="ms-4 position-relative text-decoration-none"
        style="color: #352b25"
      >
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
        <span
          class="dot position-absolute"
          v-if="cartData && cartData.length > 0"
        ></span>
      </a>
      <a
        class="d-inline d-lg-none"
        style="color: #352b25"
        @click.stop="open(`nav`)"
        ><i class="fa-solid fa-bars fa-xl bars ms-4"></i
      ></a>
    </div>
  </header>
  <!-- 購物車 -->
  <div class="position-absolute p-3 pt-0 cart" :class="openCart" @click.stop>
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
      <div
        class="icon d-flex align-items-center pe-2 trash"
        @click="delCart(item)"
      >
        <i class="fa-regular fa-trash-can fa-lg" role="button"></i>
      </div>
    </div>

    <div
      class="d-flex justify-content-between mt-2"
      v-if="cartData && cartData.length > 0"
    >
      <h4 class="fs-5">小計:</h4>
      <h4 class="fs-5">NT$ {{ totlaPrice }}</h4>
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
  <!-- 選單 -->
  <navigation />
  <!-- 彈出視窗 -->
  <div
    class="toast align-items-center position-fixed top-0 start-50 translate-middle-x mt-5"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    id="delmsg"
  >
    <div class="d-flex">
      <div class="d-flex align-items-center ms-2">
        <i class="fa-regular fa-trash-can"></i>
      </div>
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
@mixin sm {
  @media (max-width: 576px) {
    @content;
  }
}
header {
  height: 84px;
  font-size: 16px;
  .pc {
    li {
      text-align: center;
      a {
        color: #352b25;
        line-height: 84px;
        text-decoration: none;
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
        left: 0%;
        right: 0%;
      }
    }
  }
  .topCart {
    color: #ffffff;
    a {
      line-height: 84px;
    }
  }
}
.cart {
  right: 0;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 0 0 8px 8px;
  transform: translateX(120%);
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: 0.8s;
  @include pc {
    width: 50%;
  }
  @include sm {
    width: 100%;
  }
  .top {
    position: relative;
    padding-bottom: 60px;
    overflow: hidden;
    h4 {
      font-size: 16px;
    }
    &::after {
      content: "";
      position: absolute;
      border-bottom: 1.5px solid #352b25;
      width: 100%;
      bottom: 0;
    }
    .pic {
      width: 30%;
      height: 0;
      padding-bottom: 25%;
      overflow: hidden;
    }
    .trash {
      transition: 0.3s;
      &:hover {
        color: #dd534a;
      }
    }
  }
}
.openCart {
  transform: translateX(0);
}
.closeCart {
  transform: translateX(120%);
}
.pay {
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 12px;
  background-color: #865031;
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    -webkit-filter: brightness(1.2);
  }
}
.toast {
  z-index: 3;
}
.topCart {
  .dot {
    top: 35%;
    left: 45%;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #dd534a;
    left: 18px;
  }
}
</style>
