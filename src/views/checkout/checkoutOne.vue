<script setup>
import cartList from "../../components/cartList.vue";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5 d-flex justify-content-center">
        <div class="text-center">
          <div class="step line">
            <span class="schedule act">
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
      background-color: #cccccc;
      height: 30px;
      width: 30px;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: 0;
    }
  }
  .act::after {
    background-color: #865031;
  }
}
.line {
  display: inline-block;
  width: 240px;
  max-width: 33%;
  position: relative;
  &::before {
    content: " ";
    background-color: #cccccc;
    height: 2px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 35%;
    margin-top: -1px;
    z-index: 0;
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
    @include sm {
      width: 40%;
    }
  }
}
</style>
