<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from "vue-router";

const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
const pic = ref([]);
const article = ref({});
const back = ref(" ");
const scrollTop = ref(0);
const id = ref("");
const loading = ref(false);

const getData = () => {
  loading.value = true;
  id.value = useRoute().params.id;
  axios.get(`${url}/api/${path}/product/${id.value}`).then((res) => {
    pic.value = res.data.product.imagesUrl;
    article.value = res.data.product;
    switch (id.value) {
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
    loading.value = false;
  });
};
const toTop = () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div :class="back" ref="container">
    <div class="load" v-if="loading">
      <i
        class="fa-regular fa-image fa-2x fa-fade m-auto"
        style="color: #fff; --fa-animation-duration: 2s; --fa-fade-opacity: 0.1"
      ></i>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <h1 class="bigT">{{ article.title }}</h1>
          </div>
        </div>
        <div
          class="col-7 d-none d-md-flex pb-5 align-items-end text"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-delay="1500"
          data-aos-duration="2000"
        >
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
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          {{ article.content }}
        </div>
        <div class="col-12 col-md-7">
          <div v-for="item in pic" :key="item" class="mb-5">
            <img
              :src="item"
              class="w-100"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            />
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
.load {
  width: 100%;
  height: 100%;
  background-color: #828282;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  display: flex;
}
.gray {
  padding-top: 10%;
  background-color: #828282;
}
.brown {
  padding-top: 10%;
  background-color: #7f5115;
}
.darkBlue {
  padding-top: 10%;
  background-color: #1b2834;
}
.lightBlue {
  padding-top: 10%;
  background-color: #57757b;
}
* {
  color: #fff;
}
.bigT {
  margin-bottom: 300px;
  font-size: 28px;
  font-weight: 300;
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
