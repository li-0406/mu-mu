<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { usecheckOut } from "../stores/checkOut.js";
import { storeToRefs } from "pinia";
const { plus, delCart } = usecheckOut();
const { cartData, totlaPrice } = storeToRefs(usecheckOut());
onBeforeMount(() => {});
</script>
<template>
  <div class="col-12 pt-2">
    <table class="table table align-middle" style="border-spacing: 10px">
      <thead>
        <tr>
          <th scope="col">商品資料</th>
          <th scope="col">價格</th>
          <th scope="col" class="text-center">數量</th>
          <th scope="col" class="text-center">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartData" :key="item.id">
          <td scope="row">
            <div class="d-flex">
              <div
                class="productPic"
                :style="{
                  backgroundImage: 'url(' + item.product.imageUrl + ')',
                }"
              ></div>
              <h4 class="fs-6 my-auto ms-3">{{ item.product.title }}</h4>
            </div>
          </td>
          <td>NT${{ item.product.price }}</td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-center">NT${{ item.total }}</td>
        </tr>
        <tr>
          <td scope="row" class="fs-5">合計：</td>
          <td class="text-end fs-5 fw-bold" colspan="3">NT${{ totlaPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped lang="scss">
.productPic {
  width: 30%;
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: 30%;
}
</style>
