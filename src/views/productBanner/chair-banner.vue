<script setup></script>

<template>
  <div class="container banner">
    <div class="row">
      <div class="col-12">
        <div class="pic position-relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1465224414649-ceb7f1db3999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="w-100 position-absolute"
          />
        </div>
      </div>
      <div class="col-12 py-3">
        <h4 class="fs-6 lh-lg">
          椅子的前身為凳，<br />
          到宋代時，<br />
          當時的古人動手給它加上了靠背，<br />
          就此出現椅子。
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
      bottom: 0px;
    }
  }
}
</style>
