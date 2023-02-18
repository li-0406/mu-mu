<script setup>
import { onMounted } from "@vue/runtime-core";
import { useHomePage } from "../stores/homepage.js";
const { check } = useHomePage();
onMounted(() => {
  check(4);
});
</script>
<template>
  <div class="container header">
    <div class="row">
      <div
        class="col-12 pt-0 text"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
        <div class="logo mx-auto"></div>
        <div class="text-center">
          <h1 class="fs-4">日本家具的設計與職人精神</h1>
          <figure>
            <blockquote class="blockquote fs-6">
              <p>「小事成就大事，細節成就完美。」</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              <cite title="Source Title">戴維·帕長德</cite>
            </figcaption>
          </figure>
          <p class="my-4">
            目木追求簡約實用，以優質天然木材精心製作出現代經典設計，<br />
            品質為先，每件產品都經過嚴格品管。
          </p>
          <p>
            我們也重視環保，使用綠色製造方式，確保美觀耐用的同時，對環境友善。<br />
            為消費者提供高品質、美觀、實用的產品，為每個家庭帶來溫暖和舒適。<br />
          </p>
          <p class="my-4">我們不僅販售家具，更是延續樹木的第二生命🌳</p>
        </div>
      </div>
      <div class="col-12">
        <div
          class="banner"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@mixin md {
  @media (max-width: 768px) {
    @content;
  }
}
.title {
  h1 {
    font-family: "Josefin Sans", sans-serif;
  }
}
.text {
  * {
    font-weight: 300;
  }
  h1 {
    &::after {
      content: "";
      border-bottom: 2px solid #3a5942;
      display: block;
      width: 5%;
      margin: 24px auto 36px auto;
    }
  }
  .logo {
    background-image: url("../assets/logo.png");
    background-position: center;
    background-size: cover;
    width: 10%;
    height: 0;
    padding-bottom: 10%;
    @include md {
      width: 20%;
      padding-bottom: 20%;
    }
  }
}
.banner {
  background-image: url("https://images.unsplash.com/photo-1589271243979-3153ef0dcbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 30%;
}
</style>
