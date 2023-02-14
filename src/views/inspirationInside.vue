<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from "vue-router";
import LocomotiveScroll from "locomotive-scroll";

const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
const pic = ref();
const article = ref();
const back = ref("gray");
const scrollTop = ref(0);
onBeforeMount(() => {
  axios
    .get(`${url}/api/${path}/product/${useRoute().params.id}`)
    .then((res) => {
      const id = useRoute().params.id;
      pic.value = res.data.product.imagesUrl;
      article.value = res.data.product;
      switch (id) {
        case "-NOA3hHxXMN9OM0e6dw8":
          back.value = "brown";
          break;
        case "-NOA2sOdc9oCxe_SP_DJ":
          back.value = "darkBlue";
          break;
        case "-NOA21Fcfw8Up6mXB3WY":
          back.value = "lightBlue";
          break;
        default:
          back.value = "gray";
      }
    });
});
window.addEventListener("scroll", function (e) {
  scrollTop.value = window.scrollY;
});
const toTop = () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
};
const container = ref(null);
const setLocomotiveScroll = () => {
  new LocomotiveScroll({
    el: container.value,
    smooth: true,
    multiplier: 3,
  });
};
onMounted(() => {});
</script>
<template>
  <div :class="back" ref="container">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <div>
            <h1 class="bigT">{{ article.title }}</h1>
          </div>
        </div>
        <div class="col-7 d-none d-md-flex pb-5 align-items-end text">
          <div class="ms-0">
            <p class="mb-5 fw-light">
              Date <br />
              2023.02
            </p>
            <p class="fw-light">
              Production<br />
              mu-mu
            </p>
          </div>
          <div class="title">
            <p class="mb-5 fw-light">
              Client <br />
              laura
            </p>
            <p class="fw-light">
              author<br />
              mu Design Center
            </p>
          </div>
        </div>
        <div
          class="col-12 col-md-5 lh-lg fs-6 fw-light pb-5"
          style="white-space: pre-wrap; letter-spacing: 1.5px"
        >
          {{ article.content }}
        </div>
        <div class="col-12 col-md-7">
          <div v-for="item in pic" :key="item" class="mb-5">
            <img :src="item" class="w-100" />
          </div>
        </div>
        <div class="col-12 d-flex flex-row-reverse pb-2">
          <a @click="toTop" role="button"
            ><i class="fa-solid fa-chevron-up fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@mixin lg {
  @media (max-width: 992px) {
    @content;
  }
}

.gray {
  padding-top: 10%;
  background-color: #828282;
  transition: 1s;
}
.brown {
  padding-top: 10%;
  background-color: #7f5115;
  transition: 1s;
}
.darkBlue {
  padding-top: 10%;
  background-color: #1b2834;
  transition: 1s;
}
.lightBlue {
  padding-top: 10%;
  background-color: #57757b;
  transition: 1s;
}
* {
  color: #fff;
}
.bigT {
  margin-bottom: 300px;
  font-size: 28px;
  @include lg {
    margin-bottom: 100px;
    font-size: 20px;
  }
}
.title {
  margin-left: 40%;
}
.text {
  font-family: "Josefin Sans", sans-serif;
}
</style>
