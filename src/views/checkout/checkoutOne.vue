<script setup>
import cartList from "../../components/cartList.vue";
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
      <cartList />
      <div class="col-12 py-5">
        <div class="pay d-flex justify-content-center">
          <button type="button" @click="$router.push('checkout/write')">
            前往結帳
          </button>
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
    border: 2px solid #d3d3d3;
    background-color: transparent;
    padding: 0 3% 3% 0;
    border-radius: 20px;
    span {
      color: #d3d3d3;
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
  .one {
    border: 2px solid #865031;
    span {
      color: #865031;
    }
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
      background-color: #d3d3d3;
    }
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
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      -webkit-filter: brightness(1.2);
    }
  }
}
</style>
