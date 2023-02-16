<script setup>
import inspirationPage from "../components/inspirationPage.vue";
import { ref, onMounted } from "@vue/runtime-core";
import { useHomePage } from "../stores/homepage.js";
const { check } = useHomePage();
const back = ref("gray");
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 2800) {
    back.value = "lightBlue";
  } else if (window.scrollY > 1900) {
    back.value = "darkBlue";
  } else if (window.scrollY > 1000) {
    back.value = "brown";
  } else if (window.scrollY < 500) {
    back.value = "gray";
  }
});
onMounted(() => {
  check(3);
});
</script>
<template>
  <div :class="back" id="top">
    <div class="container header">
      <div class="row">
        <div class="col-12 d-flex position-relative pt-5">
          <div
            class="title mx-auto text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="2000"
          >
            <h1 class="mb-0">INSPIRATION</h1>
            <p class="fs-3">靈感</p>
          </div>
        </div>
        <div class="col-12 d-flex py-5">
          <div
            class="mx-auto text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <h2 class="fs-3">一切隨心，用心去感悟空間</h2>
            <h3 class="fs-6 fw-light lh-lg pt-3">
              將設計與空間融合，<br />
              用大眾化且簡單的方式融入我們所居住的空間中，<br />
              設計源於生活，生活因設計而改變，成就空間和諧，<br />
              讓設計物有所值，讓細節締造完美。
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <inspirationPage />
    </div>
  </div>
  <!-- header -->
</template>
<style scoped lang="scss">
@mixin mobile {
  @media (max-width: 667px) {
    @content;
  }
}
@mixin pc {
  @media (max-width: 1200px) {
    @content;
  }
}
.gray {
  background-color: #828282;
  transition: 1s;
  @include pc {
    background-color: #7f5115;
  }
}
.brown {
  background-color: #7f5115;
  transition: 1s;
}
.darkBlue {
  background-color: #1b2834;
  transition: 1s;
  @include pc {
    background-color: #7f5115;
  }
}
.lightBlue {
  background-color: #57757b;
  transition: 1s;
  @include pc {
    background-color: #7f5115;
  }
}
// header
.header {
  .title {
    h1 {
      font-family: "Josefin Sans", sans-serif;
    }
  }
  .search {
    * {
      padding: 2px 0;
      background-color: #ffffff;
      &:focus {
        outline: none;
      }
    }
    input {
      border-radius: 20px 0 0 20px;
      padding-left: 15px;
    }
    button {
      border-radius: 0 20px 20px 0;
      padding-right: 15px;
    }
  }
  li {
    @include mobile {
      width: 33%;
      text-align: center;
    }
    .click {
      &::after {
        right: 0%;
        left: 0%;
      }
    }
    a {
      line-height: 84px;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        right: 50%;
        left: 50%;
        bottom: -5px;
        border-bottom: 2px solid #865031;
        transition: 0.6s;
        @include pc {
          display: none;
        }
      }
      &:hover::after {
        right: 0%;
        left: 0%;
      }
    }
  }
}
// banner

// product
</style>
