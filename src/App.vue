<script setup>
import headernav from "./components/Header.vue";
import footerText from "./components/footer.vue";
import { onMounted } from "@vue/runtime-core";
import { useHomePage } from "./stores/homepage.js";
onMounted(() => {});
</script>

<template>
  <headernav />
  <router-view />
  <footerText />
</template>

<style scoped></style>
