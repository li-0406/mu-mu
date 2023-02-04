<script setup></script>

<template>
  <header class="d-flex justify-content-between">
    <a href="#"
      ><img src="../assets/logo.png" alt="" class="w-100 h-100 ps-4"
    /></a>
    <div class="pc">
      <ul class="d-flex list-unstyled">
        <li>
          <a href="">首頁</a>
        </li>
        <li>
          <a href="">產品系列</a>
        </li>
        <li>
          <a href="">靈感</a>
        </li>
        <li>
          <a href="">品牌理念</a>
        </li>
        <li>
          <a href="">常見問題</a>
        </li>
      </ul>
    </div>
    <div class="pe-3">
      <a href=""><i class="fa-solid fa-cart-shopping fa-xl"></i></a>
      <a href=""><i class="fa-solid fa-bars fa-xl ms-4 bars"></i></a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin pc {
  @media (max-width: 1200px) {
    @content;
  }
}
header {
  height: 84px;
  font-size: 16px;

  .pc {
    @include pc {
      display: none;
    }
  }
  li {
    a {
      color: #352b25;
      line-height: 84px;
      text-decoration: none;
      margin-right: 80px;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        right: 50%;
        left: 50%;
        bottom: -5px;
        border-bottom: 2px solid #865031;
        transition: 0.6s;
      }
      &:hover::after {
        right: 0%;
        left: 0%;
      }
    }
  }
  a {
    line-height: 84px;
    .bars {
      display: none;
      @include pc {
        display: inline;
      }
    }
  }
}
</style>
