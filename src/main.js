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

import "./assets/main.css";

import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

import { localize } from "@vee-validate/i18n";
// import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
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
