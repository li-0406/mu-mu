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
  setTimeout;
});
</script>

<template>
  <topBanner />
  <advantage />
  <space />
  <classic />
  <brandStory />
</template>

<style lang="scss" scoped></style>
