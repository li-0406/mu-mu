<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import { useProductsSeries } from "../../stores/productSeries.js";
const { changeProducts } = useProductsSeries();
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
const table = ref({});
const sofa = ref({});
const small = ref({});
const getData = () => {
  axios.get(`${url}/api/${path}/products/all`).then((res) => {
    table.value = res.data.products[9];
    sofa.value = res.data.products[11];
    small.value = res.data.products[35];
  });
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div class="container classic">
    <div class="row overflow-hidden">
      <div class="col-12 pb-3">
        <h1 class="fs-1 mb-2">classic</h1>
        <h2 class="fs-3 mb-4">經典系列</h2>
      </div>

      <div
        class="col-12 d-sm-flex"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic">
          <img :src="table.imageUrl" class="w-100" />
          <routerLink
            to="/product"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
            @click="changeProducts(1)"
          >
            查看更多
          </routerLink>
        </div>
        <div
          class="d-flex align-items-center flex-grow-1 title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div class="classicText">
            <h2 class="fw-light">
              茶几&emsp;<span class="float-end float-sm-none">TABLE</span>
            </h2>
            <h4>實木系列/空間必備</h4>
          </div>
        </div>
      </div>
      <div
        class="col-12 d-sm-flex py-sm-5"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic order-2">
          <img :src="sofa.imageUrl" class="w-100" />
          <router-link
            to="/product/sofa"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
            @click="changeProducts(2)"
          >
            查看更多
          </router-link>
        </div>
        <div
          class="d-flex align-items-center flex-grow-1 title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div class="classicText">
            <h2 class="fw-light">
              沙發&emsp;<span class="float-end float-sm-none">SOFA</span>
            </h2>
            <h4>日式風高背系列</h4>
          </div>
        </div>
      </div>
      <div
        class="col-12 d-sm-flex"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic">
          <img :src="small.imageUrl" class="w-100" />
          <router-link
            to="/product/small"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
            @click="changeProducts(6)"
          >
            查看更多
          </router-link>
        </div>
        <div
          class="d-flex align-items-center flex-grow-1 title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div class="classicText">
            <h2 class="fw-light">
              生活小物&emsp;<span class="float-end float-sm-none"
                >TISSUE BOX</span
              >
            </h2>
            <h4>空間質感加分</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@mixin pad {
  @media (max-width: 992px) {
    @content;
  }
}
@mixin mobile {
  @media (max-width: 576px) {
    @content;
  }
}
// .classic {
//   h1 {
//     font-family: "Josefin Sans", sans-serif;
//   }
//   .classicText,
//   .classicTextLeft {
//     padding: 0 25% 0 15%;
//     overflow: hidden;
//     @include mobile {
//       padding: 0;
//     }
//     h2 {
//       font-size: 28px;
//       @include pad {
//         font-size: 20px;
//       }
//       span {
//         color: #865031;
//         font-family: "Josefin Sans", sans-serif;
//       }
//       &::after {
//         content: "";
//         display: block;
//         border-bottom: 1.5px solid #352b25;
//         width: 100%;
//         margin: 12px 0;
//       }
//     }
//     h4 {
//       font-size: 20px;
//       @include pad {
//         font-size: 16px;
//       }
//     }
//   }
//   .classicTextLeft {
//     padding: 0 15% 0 25%;
//     @include mobile {
//       padding: 0;
//     }
//   }
//   .classicPic {
//     overflow: hidden;
//     img {
//       transition: 1s;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     .mask {
//       opacity: 0;
//       transition: 1s;
//       &:hover {
//         opacity: 1;
//       }
//     }
//   }
// }
.classicPic {
  border-radius: 12px;
  width: 30%;
  overflow: hidden;
  img {
    transition: 1s;
  }
  &:hover img {
    transform: scale(1.2);
  }
  .mask {
    opacity: 0;
    transition: 1s;
    &:hover {
      opacity: 1;
    }
  }
  @include mobile {
    width: 100%;
  }
}
.classicText {
  width: 100%;
  padding: 0 20%;
  @include mobile {
    padding: 24px 0;
  }
  h2 {
    font-size: 28px;
    @include pad {
      font-size: 20px;
    }
    span {
      color: #865031;
      font-family: "Josefin Sans", sans-serif;
    }
    &::after {
      content: "";
      display: block;
      border-bottom: 1.5px solid #352b25;
      width: 100%;
      margin: 12px 0;
    }
  }
  h4 {
    font-size: 20px;
    @include pad {
      font-size: 16px;
    }
  }
}
</style>
