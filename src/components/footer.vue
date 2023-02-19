<script setup></script>
<template>
  <footer class="container">
    <div class="row pt-3 footer">
      <div class="col-12 topLine pb-3"></div>
      <div class="col-12 col-md-5 col-lg-6 order-2 order-md-1">
        <ul class="list-unstyled mb-0 ps-0">
          <li class="mb-4">
            <h5>地址 address</h5>
            <p>台北市內湖區舊宗路一段128號</p>
          </li>
          <li class="mb-4">
            <h5>營業時間 opening time</h5>
            <p>周一至周日 10:00 - 19:00(採預約制)</p>
          </li>
          <li class="mb-0">
            <h5>連絡方式 contact information</h5>
            <p class="mb-0">
              <i class="fa-solid fa-phone"></i>&ensp;02-82876844
            </p>
            <p class="mb-0">
              <i class="fa-solid fa-envelope"></i>&ensp;future.design@gmail.com
            </p>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-7 col-lg-6 order-1 order-md-1">
        <h5 class="mb-3">快速連結</h5>
        <ul
          class="list-unstyled d-flex justify-content-between justify-content-sm-start"
        >
          <li>
            <router-link to="/" class="text-reset fw-light">首頁</router-link>
          </li>
          <li class="mx-sm-5 mx-md-4 mx-lg-5">
            <router-link to="/product" class="text-reset fw-light"
              >產品系列</router-link
            >
          </li>
          <li>
            <router-link to="/inspiration" class="text-reset fw-light"
              >靈感</router-link
            >
          </li>
          <li class="mx-sm-5 mx-md-4 mx-lg-5">
            <router-link to="/brandConcept" class="text-reset fw-light"
              >品牌理念</router-link
            >
          </li>
          <li>
            <router-link to="/maintainance" class="text-reset fw-light"
              >保養方式</router-link
            >
          </li>
        </ul>
        <h5 class="mt-5 mb-3">Follow Us</h5>
        <ul class="ps-0">
          <li class="d-flex" style="color: rgba(53, 43, 37, 0.5)">
            <i
              class="me-4 fa-brands fa-square-facebook fa-2xl icon"
              role="button"
            ></i>
            <i class="me-4 fa-brands fa-line fa-2xl" role="button"></i>
            <i class="fa-brands fa-instagram fa-2xl" role="button"></i>
          </li>
        </ul>
      </div>
      <div class="col-12 order-3">
        <p class="footerText mx-auto text-center fw-light mb-2">
          @2022,本網頁僅供個人作品集使用，無任何商業用途
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  .topLine {
    &::after {
      content: "";
      display: block;
      border-top: 1px solid #ebebeb;
      width: 100%;
      top: 0;
    }
  }

  li {
    font-size: 14px;

    h5 {
      font-size: 14px;
    }
    p {
      font-weight: 300;
    }
  }

  .footerText {
    color: rgba(53, 43, 37, 0.5);
    font-size: 14px;
    &::before {
      content: "";
      display: block;
      border-top: 1.5px solid rgba(53, 43, 37, 0.1);
      width: 100%;
      margin: 8px 0;
    }
  }
}
</style>
