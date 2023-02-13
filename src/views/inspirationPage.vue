<script setup></script>
<template>
  <div class="col-12 d-flex total" v-for="item in 4" :key="item">
    <div class="pic" role="button">
      <img
        src="https://cdn.shopify.com/s/files/1/2594/5156/articles/ALOT_Living_800x.jpg?v=1652414519"
        class="w-100"
      />
    </div>
    <div class="text d-flex flex-column justify-content-end mb-5">
      <div class="title" role="button">
        <h3 class="fs-6 fw-light mb-5 small">01/04&emsp;-&emsp;design</h3>
        <h3 class="mb-3">客廳空間</h3>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.total {
  padding-left: 10%;
  padding-bottom: 20%;
  .pic {
    overflow: hidden;
    background-repeat: no-repeat;
    width: 50%;
    height: 0;
    padding-bottom: 30%;
    img {
      transition: 3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .text {
    margin-left: 10%;
    * {
      color: #fff;
    }
    .title {
      &:hover .small::after {
        right: 0%;
        left: 0%;
      }
    }
    .small {
      position: relative;
      &::after {
        content: "";
        border-bottom: 1px solid #fff;
        position: absolute;
        bottom: -5px;
        right: 100%;
        left: 0%;
        transition: 0.5s;
      }
    }
  }
}
</style>
