<script setup>
import { storeToRefs } from "pinia";
import { useHomePage } from "../../stores/homepage.js";
const { changeSpace, checkSpace, check } = useHomePage();
const { spaceImgs } = storeToRefs(useHomePage());
</script>
<template>
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
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="spaceImgs[0]" class="d-block w-100 h-100" />
            </div>
            <div class="carousel-item">
              <img :src="spaceImgs[1]" class="d-block w-100 h-100" />
            </div>
            <div class="carousel-item">
              <img :src="spaceImgs[2]" class="d-block w-100 h-100" />
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
          left: 55%;
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
          left: 55%;
          right: 0%;
        }
        &:hover::after {
          right: 0%;
          left: 55%;
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
</style>
