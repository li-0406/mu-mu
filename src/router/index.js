import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/HomePage.vue"),
    },
  ],
});

export default router;
