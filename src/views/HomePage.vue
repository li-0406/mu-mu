<script setup>
import { onMounted } from "@vue/runtime-core";
import { useHomePage } from "../stores/homepage.js";
import { ref } from "vue";
import topBanner from "../components/homePage/banner.vue";
import advantage from "../components/homePage/advantage.vue";
import space from "../components/homePage/space.vue";
import classic from "../components/homePage/classic.vue";
import brandStory from "../components/homePage/brandStory.vue";
const { changeSpace, check } = useHomePage();
onMounted(() => {
  changeSpace(1);
  check(1);
});
</script>

<template>
  <div class="load">
    <i
      class="fa-solid fa-chair fa-2x fa-fade m-auto"
      style="color: #fff; --fa-animation-duration: 2s; --fa-fade-opacity: 0.1"
    ></i>
  </div>
  <topBanner />
  <advantage />
  <space />
  <classic />
  <brandStory />
</template>

<style lang="scss" scoped>
.load {
  width: 100%;
  height: 100vh;
  background-color: #8f5a3c;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  display: flex;
}
</style>
