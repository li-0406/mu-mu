import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "vue-loading-overlay/dist/css/index.css";
import "./assets/main.css";

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

import { localize } from "@vee-validate/i18n";
import en from "./zh_TW.json";

configure({
  generateMessage: localize({
    en,
  }),
  validateOnInput: true,
});

const app = createApp(App);
AOS.init();
app.use(createPinia());
app.use(router);
app.mount("#app");
