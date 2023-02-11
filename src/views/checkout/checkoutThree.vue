<script setup>
import cartListLast from "../../components/cartListLast.vue";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { usecheckOut } from "../../stores/checkOut.js";
import { storeToRefs } from "pinia";
import router from "@/router";
const { orderNum, userData } = storeToRefs(usecheckOut());
onBeforeMount(() => {
  userData.value = JSON.parse(sessionStorage.getItem("userData"));
  orderNum.value = new Date().getTime();
  console.log(orderNum.value);
});
const finish = () => {
  sessionStorage.setItem("orderNum", JSON.stringify(orderNum.value));
  router.push("/checkout/finish");
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <div class="step d-flex position-relative">
          <div class="one position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >1</span
            >
          </div>
          <div class="out position-relative">
            <div
              class="line position-absolute top-50 start-50 translate-middle"
            ></div>
          </div>
          <div class="two position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >2</span
            >
          </div>
          <div class="out position-relative">
            <div
              class="line position-absolute top-50 start-50 translate-middle"
            ></div>
          </div>
          <div class="three position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >3</span
            >
          </div>
        </div>
      </div>
      <cartListLast />
      <div class="col-12 pt-5">
        <h3 class="information fs-4">&nbsp;訂單資訊</h3>
        <h4 class="mb-4 fw-light fs-5">&nbsp;訂單號碼：{{ orderNum }}</h4>
        <h4 class="mb-4 fw-light fs-5">&nbsp;訂單狀態：未付款</h4>
        <h4 class="fw-light fs-5">&nbsp;付款方式：{{ userData.pay }}</h4>
      </div>
      <div class="col-12 pt-5">
        <h3 class="information fs-4">&nbsp;收件人資料</h3>
        <h4 class="mb-4 fw-light fs-5">&nbsp;收件人：{{ userData.name }}</h4>
        <h4 class="mb-4 fw-light fs-5">&nbsp;email：{{ userData.email }}</h4>
        <h4 class="mb-4 fw-light fs-5">&nbsp;手機號碼：{{ userData.tel }}</h4>
        <h4 class="mb-4 fw-light fs-5">
          &nbsp;收件地址：{{ userData.address }}
        </h4>
        <h4 class="fw-light fs-5">&nbsp;備註：{{ userData.text }}</h4>
      </div>
      <div class="col-12 py-5">
        <div class="pay d-flex justify-content-center">
          <button type="button" @click="finish">確認付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.step {
  left: 25%;
  .one,
  .two,
  .three {
    width: 0;
    height: 0;
    border: 2px solid #865031;
    background-color: transparent;
    padding: 0 3% 3% 0;
    border-radius: 20px;
    span {
      color: #865031;
    }
    &::after {
      content: "購物車";
      position: absolute;
      width: 60px;
      bottom: -25px;
      left: -3px;
    }
  }
  .two::after {
    content: "填寫資料";
    left: -10px;
  }
  .three::after {
    content: "訂單確認";
    left: -10px;
  }
  .out {
    width: 0;
    height: 0;
    padding: 0 20% 3% 0;
    background-color: transparent;
    overflow: hidden;
    .line {
      width: 500px;
      height: 2px;
      background-color: #865031;
    }
  }
}
.information {
  &::after {
    content: "";
    display: block;
    margin: 12px 0;
    border-bottom: 1.5px solid #d3d3d3;
    width: 100%;
    bottom: 0;
  }
}
.pay {
  button {
    border: none;
    background-color: #865031;
    color: #fff;
    padding: 8px;
    border-radius: 12px;
    width: 20%;
    font-size: 16x;
    transition: 0.3s;
    &:hover {
      -webkit-filter: brightness(1.2);
    }
  }
}
</style>
