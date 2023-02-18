<script setup></script>
<template>
  <div class="advantage">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="bg-white text-dark advantageBox py-4 px-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/expert.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">職人精神</h3>
            <p class="text-center lh-base mb-0 fs-6 fw-light">
              團隊裡每位都是數十年經驗的老師傅，
              對於品質上有著極高的要求，對於每個細節，必定要求完美，不論是在家具的設計或是製作上，都運用自身的經驗以及寶貴的技術。
            </p>
          </div>
        </div>

        <div class="col">
          <div
            class="bg-white text-dark advantageBox py-4 px-4"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/quality.png" class="w-100" />
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
          <div
            class="bg-white text-dark advantageBox py-4 px-4"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/custom.png" class="w-100" />
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
</style>
