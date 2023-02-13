<script setup>
import { usecheckOut } from "../../stores/checkOut.js";
import { useHomePage } from "../../stores/homepage";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "@vue/runtime-core";
import axios from "axios";
import router from "@/router";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
const { orderNum, userData } = storeToRefs(usecheckOut());
const { cartData, totlaPrice } = storeToRefs(useHomePage());

onBeforeMount(() => {
  orderNum.value = JSON.parse(sessionStorage.getItem("orderNum"));
  console.log(orderNum.value);
});
const backHome = () => {
  router.push("/");

  axios.delete(`${url}/api/${path}/carts`).then((res) => {
    cartData.value = [];
    totlaPrice.value = {};
    userData.value = {
      pay: "信用卡",
    };
  });
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center pt-5">
        <div class="p-3">
          <i class="fa-regular fa-circle-check fa-3x"></i>
        </div>
        <div>
          <h3 class="mb-3 fs-5">謝謝您！您的訂單已經成立！</h3>
          <h3 class="fs-5">訂單號碼 {{ orderNum }}</h3>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button type="buttoon" class="my-5" @click="backHome">回首頁</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
button {
  width: 20%;
  padding: 6px;
  font-size: 16px;
  border-radius: 12px;
  color: #ffffff;
  border: 1.5px solid #865031;
  background-color: #865031;
  transition: 0.5s;
  &:hover {
    -webkit-filter: brightness(1.2);
  }
}
</style>
