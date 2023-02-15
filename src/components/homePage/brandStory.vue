<script setup></script>
<template>
  <div class="position-relative brandStory">
    <img src="../../assets/homepage/desktop_brand_story.png" class="w-100" />
    <div class="brandText position-absolute">
      <h2 class="fs-1 fw-normal">BRAND STORY</h2>
      <h3 class="fs-3 fw-light my-4">空間中，你是主角，目木是美麗的配角</h3>
      <h3 class="fs-5 mb-5 lh-base fw-light">
        為你而便利的存在<br />
        陪你在空間裡的自在<br />
        為質感而生的空間藝術家目木
      </h3>
      <router-link to="/brandConcept" class="text-decoration-none fs-6"
        >目木品牌理念</router-link
      >
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
.brandStory {
  margin-top: 80px;
  @include pad {
    margin-top: 48px;
  }
  img {
    @include mobile {
      content: url(../../assets/homepage/mobile_brand_story.png);
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
</style>
