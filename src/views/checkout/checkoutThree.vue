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
      <div class="col-12 py-5 d-flex justify-content-center">
        <div class="text-center">
          <div class="step line">
            <span class="schedule">
              <span class="text">1</span>
            </span>
            <span class="d-block">購物車</span>
          </div>
          <div class="step line">
            <span class="schedule">
              <span class="text">2</span>
            </span>
            <span class="d-block">填寫資料</span>
          </div>
          <div class="step">
            <span class="schedule">
              <span class="text">3</span>
            </span>
            <span class="d-block">訂單確認</span>
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
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
.step {
  display: inline-block;
  width: 240px;
  max-width: 33%;
  position: relative;
  .text {
    z-index: 1;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
  }
  .schedule {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0;
    &::after {
      content: " ";
      border-radius: 15px;
      transform: translate(-50%, -50%);
      background-color: #865031;
      height: 30px;
      width: 30px;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: 0;
    }
  }
}
.line {
  display: inline-block;
  width: 240px;
  max-width: 33%;
  position: relative;
  &::before {
    content: " ";
    background-color: #865031;
    height: 2px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 35%;
    margin-top: -1px;
    z-index: 0;
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
    width: 25%;
    font-size: 16x;
    transition: 0.3s;
    &:hover {
      -webkit-filter: brightness(1.2);
    }
  }
}
</style>
