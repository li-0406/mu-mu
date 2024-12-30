<script setup></script>
<template>
  <div class="position-relative banner">
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease"
      data-aos-offset="0"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <img src="../../assets/homepage/desktop_kv.png" style="width: 100%" />
      <div class="container position-absolute bannerText">
        <div class="row">
          <div class="col">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <h1 class="fs-2 mb-5 lh-base fw-light">
                將設計融於人性<br />
                將家居帶入悠閒自在的情境
              </h1>
              <router-link
                to="/product"
                class="text-decoration-none px-5 py-2 fs-5 bannerBtn"
                >挑選產品</router-link
              >
            </div>
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
.banner {
  img {
    @include mobile {
      content: url(../../assets/homepage/mobile_kv.png);
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
      transition: 0.4s linear;
      position: relative;
      z-index: 0;
      &:hover {
        color: #ffffff;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #865031;
        z-index: -1;
        transition: 0.5s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
      }
      &::before {
        transform: scaleX(0);
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
