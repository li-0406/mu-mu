<script setup></script>
<template>
  <footer class="container footer">
    <div class="row">
      <div class="col-12 col-md-5 col-lg-6 order-2 order-md-1">
        <ul class="list-unstyled">
          <li>
            <div class="logo">
              <img src="../assets/logo.png" class="w-100" />
            </div>
          </li>
          <li class="mb-4">
            <h5>地址 address</h5>
            <p>台北市內湖區舊宗路一段128號</p>
          </li>
          <li class="mb-4">
            <h5>營業時間 opening time</h5>
            <p>周一至周日 10:00 - 19:00(採預約制)</p>
          </li>
          <li class="mb-4">
            <h5>連絡方式 contact information</h5>
            <p class="mb-0">
              <i class="fa-solid fa-phone"></i>&ensp;02-82876844
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>&ensp;future.design@gmail.com
            </p>
          </li>
          <li class="d-flex" style="color: rgba(53, 43, 37, 0.5)">
            <i
              class="me-4 fa-brands fa-square-facebook fa-xl icon"
              role="button"
            ></i>
            <i class="me-4 fa-brands fa-line fa-xl" role="button"></i>
            <i class="fa-brands fa-instagram fa-xl" role="button"></i>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-7 col-lg-6 order-1 order-md-1">
        <h5 class="mt-5 mb-3">快速連結</h5>
        <ul class="list-unstyled d-flex justify-content-between">
          <li>
            <router-link to="/" class="text-decoration-none text-reset fw-light"
              >首頁</router-link
            >
          </li>
          <li>
            <router-link
              to="/product"
              class="text-decoration-none text-reset fw-light"
              >產品系列</router-link
            >
          </li>
          <li>
            <router-link
              to="/inspiration"
              class="text-decoration-none text-reset fw-light"
              >靈感</router-link
            >
          </li>
          <li>
            <router-link
              to="/brandConcept"
              class="text-decoration-none text-reset fw-light"
              >品牌理念</router-link
            >
          </li>
          <li>
            <router-link
              to="/maintainance"
              class="text-decoration-none text-reset fw-light"
              >保養方式</router-link
            >
          </li>
        </ul>
        <div class="map ratio ratio-21x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2052533467563!2d121.57601114784678!3d25.061031456130724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab81417cf23d%3A0xd257a23dcf7fd985!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A6IiK5a6X6Lev5LiA5q61MTI46Jmf!5e0!3m2!1szh-TW!2stw!4v1675326060184!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-100"
          ></iframe>
        </div>
      </div>
      <div class="col-12 order-3">
        <p class="footerText mx-auto text-center fw-light">
          @2022,本網頁僅供個人作品集使用，無任何商業用途
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  .logo {
    width: 135px;
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
    &::before {
      content: "";
      display: block;
      border-top: 1.5px solid rgba(53, 43, 37, 0.1);
      width: 100%;
      margin: 12px 0;
    }
  }
}
</style>
