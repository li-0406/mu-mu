<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";

const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
const article = ref();
const scrollTop = ref(0);
const getData = () => {
  axios.get(`${url}/api/${path}/products?category=靈感`).then((res) => {
    article.value = res.data.products;
    console.log(article.value);
  });
};
onMounted(() => {
  getData();
});
window.addEventListener("scroll", function (e) {
  scrollTop.value = window.scrollY;
});
const toTop = () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
};
</script>
<template>
  <div
    class="col-12 d-sm-flex total"
    v-for="item in article"
    :key="item.id"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="1500"
  >
    <div class="pic">
      <router-link :to="`/inside/${item.id}`">
        <img :src="item.imageUrl" class="w-100" />
      </router-link>
    </div>
    <div class="text d-flex flex-column justify-content-end py-3">
      <div class="title">
        <router-link :to="`/inside/${item.id}`" class="text-decoration-none">
          <span class="fs-6 fw-light small" style="white-space: pre-wrap">
            {{ item.unit }}
          </span>
          <h3 class="my-0 my-sm-5">{{ item.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
  <div class="col-12 d-flex flex-row-reverse pe-5 pb-3">
    <a @click="toTop" role="button"
      ><i class="fa-solid fa-chevron-up fa-2xl"></i>
    </a>
  </div>
</template>
<style scoped lang="scss">
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
@mixin lg {
  @media (max-width: 992px) {
    @content;
  }
}
.total {
  padding-left: 10%;
  padding-bottom: 20%;
  @include lg {
    padding-left: 5%;
    padding-bottom: 10%;
  }
  @include sm {
    padding-left: 0;
    padding-bottom: 0;
  }

  .pic {
    overflow: hidden;
    background-repeat: no-repeat;
    width: 50%;
    height: 0;
    padding-bottom: 30%;
    img {
      transition: 3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    @include sm {
      width: 100%;
      padding-bottom: 60%;
    }
  }
  .text {
    margin-left: 10%;
    @include sm {
      margin-left: 0;
    }

    * {
      color: #fff;
    }
    .title {
      @include lg {
        h3 {
          font-size: 20px;
        }
      }
      &:hover .small::after {
        right: 0%;
        left: 0%;
      }
    }
    .small {
      position: relative;
      font-family: "Josefin Sans", sans-serif;
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
