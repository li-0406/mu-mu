<script setup>
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { useHomePage } from "../stores/homepage.js";
const { changeSpace, checkSpace } = useHomePage();
const { spaceImg, spaceImgs } = storeToRefs(useHomePage());
onMounted(() => {
  changeSpace(1);
});
</script>

<template>
  <!-- banner -->
  <div class="position-relative banner d-flex">
    <div class="">
      <img
        src="../assets/homepage/desktop_kv.png"
        class="w-100"
        data-aos="fade-zoom-in"
        data-aos-easing="ease"
        data-aos-offset="0"
        data-aos-duration="2000"
        data-aos-once="true"
      />
      <div
        class="position-absolute bannerText"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        <h1 class="fs-2 mb-5 lh-base fw-light">
          將設計融於人性<br />
          將家居帶入悠閒自在的情境
        </h1>
        <a
          href=""
          class="text-decoration-none rounded-pill p-3 pe-5 ps-5 fs-4 bannerBtn"
          >挑選產品</a
        >
      </div>
    </div>
  </div>
  <!-- advantage -->
  <div class="advantage">
    <div class="container">
      <div class="row">
        <div class="col d-flex">
          <div class="bg-white text-dark advantageBox py-4 px-4">
            <div class="pic mx-auto">
              <img src="../assets/homepage/expert.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">職人精神</h3>
            <p class="text-center lh-base mb-0 fs-6 fw-light">
              團隊裡每位都是數十年經驗的老師傅，
              對於品質上有著極高的要求，對於每個細節，必定要求完美，不論是在家具的設計或是製作上，都運用自身的經驗以及寶貴的技術。
            </p>
          </div>
        </div>

        <div class="col">
          <div class="bg-white text-dark advantageBox py-4 px-4">
            <div class="pic mx-auto">
              <img src="../assets/homepage/quality.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">品質保證</h3>
            <p class="text-center lh-base mb-0 fs-6 fw-light">
              為了家具實用與耐用的堅持，並同時兼顧環保與森林永續發展，我們特別嚴選經
              FSC 認證之北美再生林木材，並採用通過 SGS
              化學檢驗標準的安全塗料，讓您更加安心使用。
            </p>
          </div>
        </div>
        <div class="col d-flex">
          <div class="bg-white text-dark advantageBox py-4 px-4">
            <div class="pic mx-auto">
              <img src="../assets/homepage/custom.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">量身打造</h3>
            <p class="text-center lh-base mb-0 fs-6 fw-light">
              從溝通到製作，依照每種裝潢風格與喜好的表面塗裝、色彩，或任何特殊造型，品牌本身提供多種選擇外，一切為您客製化訂做。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- space -->
  <div class="container space">
    <div class="row">
      <div class="col-12 col-lg-2">
        <div class="spaceText">
          <div class="title">
            <h1 class="fs-1 mb-3">inspiration</h1>
            <h2 class="fs-3">空間應用</h2>
          </div>

          <ul class="list-unstyled mt-5 mb-0">
            <li
              class="mb-4"
              :class="checkSpace(1)"
              role="button"
              @click="changeSpace(1)"
            >
              <h3>客廳空間</h3>
              <p>living room</p>
            </li>
            <li
              class="mb-4"
              role="button"
              :class="checkSpace(2)"
              @click="changeSpace(2)"
            >
              <h3>臥室空間</h3>
              <p>bedroom</p>
            </li>
            <li
              class="mb-4"
              role="button"
              :class="checkSpace(3)"
              @click="changeSpace(3)"
            >
              <h3>廚房空間</h3>
              <p>kitchen</p>
            </li>
            <li
              class="mb-4"
              role="button"
              :class="checkSpace(4)"
              @click="changeSpace(4)"
            >
              <h3>餐廳空間</h3>
              <p>dining room</p>
            </li>
            <li
              class="mb-4"
              role="button"
              :class="checkSpace(5)"
              @click="changeSpace(5)"
            >
              <h3>浴室空間</h3>
              <p>bathroom</p>
            </li>
            <li role="button" :class="checkSpace(6)" @click="changeSpace(6)">
              <h3>商業空間</h3>
              <p>commercial</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-10 d-flex align-items-end">
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-fade pic"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="spaceImg" class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="spaceImgs[0]" class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="spaceImgs[1]" class="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- classic -->

  <div class="container classic">
    <div class="row overflow-hidden">
      <div class="col-12">
        <h1 class="fs-1 mb-2">classic</h1>
        <h2 class="fs-3 mb-4">經典系列</h2>
      </div>
      <div
        class="col-12 col-sm-4"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic">
          <img src="../assets/homepage/cabinet.png" class="w-100" />
          <a
            href="#"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
          >
            查看更多
          </a>
        </div>
      </div>
      <div
        class="col-12 col-sm-8 d-flex align-items-center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="classicText w-100 py-3">
          <h2 class="fw-light">
            櫃子11&emsp;<span class="float-end float-sm-none">CABINET</span>
          </h2>
          <h4>原木系列/空間必備</h4>
        </div>
      </div>
      <div
        class="col-12 col-sm-4 order-1 order-sm-2"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic">
          <img src="../assets/homepage/cabinet.png" class="w-100" />
          <a
            href="#"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
          >
            查看更多
          </a>
        </div>
      </div>
      <div
        class="col-12 col-sm-8 d-flex align-items-center order-2 order-sm-1"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="classicTextLeft w-100 py-3">
          <h2 class="fw-light">
            櫃子&emsp;<span class="float-end float-sm-none">CABINET</span>
          </h2>
          <h4>原木系列/空間必備</h4>
        </div>
      </div>
      <div
        class="col-12 col-sm-4 order-3"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="position-relative classicPic">
          <img src="../assets/homepage/cabinet.png" class="w-100" />
          <a
            href="#"
            style="background-color: rgba(0, 0, 0, 0.3)"
            class="text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask"
          >
            查看更多
          </a>
        </div>
      </div>
      <div
        class="col-12 col-sm-8 d-flex align-items-center order-4"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="classicText w-100 pt-3">
          <h2 class="fw-light">
            櫃子&emsp;<span class="float-end float-sm-none">CABINET</span>
          </h2>
          <h4>原木系列/空間必備</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- Brand story -->
  <div class="position-relative brandStory">
    <img src="../assets/homepage/desktop_brand_story.png" class="w-100" />
    <div class="brandText position-absolute">
      <h2 class="fs-1 fw-normal">BRAND STORY</h2>
      <h3 class="fs-3 fw-light my-4">空間中，你是主角，目木是美麗的配角</h3>
      <h3 class="fs-5 mb-5 lh-base">
        為你而便利的存在<br />
        陪你在空間裡的自在<br />
        為質感而生的空間藝術家目木
      </h3>
      <a href="#" class="text-decoration-none fs-6">目木品牌理念</a>
    </div>
  </div>
  <!-- footer -->
</template>

<style lang="scss" scoped>
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
// banner
.banner {
  color: #352b25;
  img {
    @include mobile {
      content: url(../assets/homepage/mobile_kv.png);
    }
  }
  .bannerText {
    left: 15%;
    top: 50%;
    @include pad {
      left: 10%;
      top: 30%;
    }
    @include mobile {
      top: 5%;
      text-align: center;
      left: 0;
      right: 0;
      margin: auto;
    }
    .bannerBtn {
      color: #865031;
      border: 1.5px solid #865031;
      transition: 0.8s;
      &:hover {
        background: rgba(134, 80, 49, 0.09);
      }
    }
  }
}
// advantage
.advantage {
  background-color: #fff9f3;
  .advantageBox {
    margin: 80px 0;
    border-radius: 20px;
    box-shadow: 0px 2px 24px rgba(53, 43, 37, 0.1),
      0px 2px 6px rgba(53, 43, 37, 0.1);
    @include pad {
      margin: 24px 0;
    }
    .pic {
      width: 160px;
    }
  }
}
// space
.space {
  margin: 80px auto;
  @include pad {
    margin: 48px auto;
  }
  .spaceText {
    .title {
      @include pad {
        text-align: center;
      }
      h1 {
        font-family: "Josefin Sans", sans-serif;
      }
    }

    ul {
      @include pad {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      li {
        @include pad {
          width: 33%;
          text-align: center;
        }

        position: relative;
        &:hover * {
          color: #352b25;
        }
        h3 {
          color: rgba(53, 43, 37, 0.4);
          font-size: 18px;
          margin-bottom: 0;
          transition: 0.8s;
        }
        p {
          color: rgba(53, 43, 37, 0.4);
          font-size: 12px;
          margin-bottom: 0;
          transition: 0.8s;
        }
        &::after {
          content: "";
          position: absolute;
          border-bottom: 1.5px solid #865031;
          left: 100%;
          top: 50%;
          transition: 0.8s;
          @include pad {
            display: none;
          }
        }
        &:hover::after {
          right: 0%;
          left: 45%;
        }
      }
      .click {
        * {
          color: #352b25;
        }

        &::after {
          content: "";
          position: absolute;
          border-bottom: 1.5px solid #865031;
          top: 50%;
          left: 45%;
          right: 0%;
        }
        &:hover::after {
          right: 0%;
          left: 45%;
        }
      }
    }
  }
  .pic {
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
  }
}
// classic
.classic {
  h1 {
    font-family: "Josefin Sans", sans-serif;
  }
  .classicText,
  .classicTextLeft {
    padding: 0 25% 0 15%;
    overflow: hidden;
    @include mobile {
      padding: 0;
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
  .classicTextLeft {
    padding: 0 15% 0 25%;
    @include mobile {
      padding: 0;
    }
  }
  .classicPic {
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
  }
}
// Brand story
.brandStory {
  margin-top: 80px;
  @include pad {
    margin-top: 48px;
  }
  img {
    @include mobile {
      content: url(../assets/homepage/mobile_brand_story.png);
    }
  }
  .brandText {
    margin-left: 55%;
    top: 50%;
    transform: translateY(-50%);
    @include pad {
      margin-left: 40%;
    }
    @include mobile {
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 30%;
      text-align: center;
    }
    h2 {
      font-family: "Josefin Sans", sans-serif;
    }
    a {
      color: #865031;
      display: flex;
      @include mobile {
        flex-direction: column;
      }
      &::before {
        content: "";
        display: block;
        border-bottom: 1.5px solid #865031;
        width: 30%;
        margin: auto 20px auto 0;

        @include mobile {
          transform: rotate(90deg);
          margin: 0 auto 40px auto;
          width: 15%;
        }
      }
    }
  }
}
// footer
</style>
