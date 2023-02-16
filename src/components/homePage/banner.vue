<script setup></script>
<template>
  <div class="position-relative banner d-flex">
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease"
      data-aos-offset="0"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <img src="../../assets/homepage/desktop_kv.png" class="w-100" />
      <div
        class="position-absolute bannerText"
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
      border-radius: 16px;
      transition: 0.6s;

      &:hover {
        background-color: #86503148;
      }
    }
  }
}
</style>
