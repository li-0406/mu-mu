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
            data-aos-once="true"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/expert.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">職人精神</h3>
            <p class="lh-lg mb-0 fs-6 fw-light">
              團隊裡每位師傅追求卓越的態度，對工作不斷精進，不只追求於表面的完成，而是追求更高水平的完美，追求品質的熱忱和追求成就的動力。
            </p>
          </div>
        </div>

        <div class="col">
          <div
            class="bg-white text-dark advantageBox py-4 px-4"
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/quality.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">品質保證</h3>
            <p class="lh-lg mb-0 fs-6 fw-light">
              為了家具實用與耐用的堅持，並同時兼顧環保與森林永續發展，我們嚴格的品質管理，可以提高品質、讓您更加安心使用。
            </p>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-white text-dark advantageBox py-4 px-4"
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div class="pic mx-auto">
              <img src="../../assets/homepage/custom.png" class="w-100" />
            </div>
            <h3 class="text-center mt-3 mb-2 fs-4">量身打造</h3>
            <p class="lh-lg mb-0 fs-6 fw-light">
              基於顧客的獨特需求和要求，一切為您客製化訂做，提供度身定制的產品與服務，滿足獨特的需求和期望，提升產品的使用價值和滿意度。
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
