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
      <div class="col-12 pt-0 text">
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
            日本家具以百年傳承之工藝為底蘊，設計簡約質樸<br />
            透過師傅雙手，成就一個個富含故事與溫暖的實木家具
          </p>
          <p>
            目木期望傳遞日本職人的精神<br />
            嚴選兼具原創設計及耐用的質感家具<br />
            讓每個人都能輕鬆擁有 日式居家生活美學
          </p>
          <p class="my-4">我們不僅販售家具，更是延續樹木的第二生命🌳</p>
        </div>
      </div>
      <div class="col-12">
        <div class="banner"></div>
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
