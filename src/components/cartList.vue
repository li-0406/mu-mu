<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { usecheckOut } from "../stores/checkOut.js";
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
const { plus, delCart } = usecheckOut();
const { cartData, totlaPrice } = storeToRefs(useProductsSeries());
</script>
<template>
  <div class="col-12 pt-2 d-none d-md-block">
    <table class="table table align-middle" style="border-spacing: 10px">
      <thead>
        <tr>
          <th scope="col">商品資料</th>
          <th scope="col">價格</th>
          <th scope="col" class="text-center">數量</th>
          <th scope="col" colspan="sm-4">小計</th>
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
          <td class="text-center">
            <div class="num">
              <button class="minus border-0" @click="plus(item, `minus`)">
                <i class="fa fa-minus text-reset"></i>
              </button>
              <input
                type="number"
                class="border-0 text-center"
                v-model="item.qty"
                @blur="plus(item)"
              />
              <button class="plus border-0" @click="plus(item, `plus`)">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </td>
          <td>NT${{ item.total }}</td>
          <td>
            <span @click="delCart(item)">
              <i class="fa-regular fa-trash-can fa-lg" role="button"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td scope="row" colspan="3" class="fs-5">合計：</td>
          <td class="text-end fs-5 fw-bold" colspan="3">NT${{ totlaPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-12 border-top d-block d-md-none">
    <div v-for="item in cartData" :key="item.id" class="pt-2">
      <div class="d-flex justify-content-between align-items-center">
        <div
          class="productPic"
          :style="{
            backgroundImage: 'url(' + item.product.imageUrl + ')',
          }"
        ></div>
        <h4 class="fs-6 my-auto ms-3">
          {{ item.product.title }}
        </h4>
        <span @click="delCart(item)">
          <i class="fa-regular fa-trash-can fa-lg" role="button"></i>
        </span>
      </div>
      <div class="d-flex justify-content-between mt-2 border-bottom">
        <div class="num">
          <button class="minus border-0" @click="plus(item, `minus`)">
            <i class="fa fa-minus text-reset"></i>
          </button>
          <input
            type="number"
            class="border-0 text-center"
            v-model="item.qty"
            @blur="plus(item)"
          />
          <button class="plus border-0" @click="plus(item, `plus`)">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <h5 class="fs-6">NT${{ item.product.price }}</h5>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <h5>合計：</h5>
      <h5 class="fw-bold">NT${{ totlaPrice }}</h5>
    </div>
  </div>
</template>
<style scoped lang="scss">
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
.num {
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input:focus {
    outline: none;
  }
  input {
    width: 15%;
    @include sm {
      width: 30%;
    }
  }
  button {
    background: transparent;
  }
}
.productPic {
  width: 40%;
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: 40%;
  @include sm {
    width: 20%;
    padding-bottom: 20%;
  }
}
</style>
