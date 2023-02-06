<script setup></script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div class="pic position-relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578112010316-b44c50d27b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="w-100 position-absolute"
          />
        </div>
      </div>
      <div class="col-12 py-3">
        <h4 class="fs-6 lh-lg">
          沙發是英文sofa的音譯，<br />
          源於阿拉伯語的soffah，<br />
          意思是「在地上凸起地方鋪上墊子或毯子供人坐」，<br />
          直至1917年，sofa才有椅子的意思。
        </h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  .pic {
    padding-bottom: 35%;
    img {
      bottom: -200px;
    }
  }
}
</style>
