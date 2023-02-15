<script setup>
import { onMounted } from "@vue/runtime-core";
import maintainancePage from "../components/maintainancePage.vue";
import { useHomePage } from "../stores/homepage.js";
const { check } = useHomePage();
onMounted(() => {
  check(5);
});
</script>
<template>
  <div class="container header">
    <div class="row">
      <div class="col-12 d-flex position-relative pt-5">
        <div class="title mx-auto text-center">
          <h1 class="mb-0">MAINTAINANCE</h1>
          <p class="fs-3">保養方式</p>
        </div>
      </div>
      <div class="col-12">
        <maintainancePage />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  .title {
    h1 {
      font-family: "Josefin Sans", sans-serif;
    }
  }
}
</style>
