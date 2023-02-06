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
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
      children: [
        {
          path: "/product",
          component: () => import("../views/productBanner/table-banner.vue"),
        },
        {
          path: "sofa",
          component: () => import("../views/productBanner/sofa-banner.vue"),
        },
        {
          path: "liv",
          component: () => import("../views/productBanner/liv-banner.vue"),
        },
        {
          path: "bed",
          component: () => import("../views/productBanner/bed-banner.vue"),
        },
        {
          path: "chair",
          component: () => import("../views/productBanner/chair-banner.vue"),
        },
        {
          path: "small",
          component: () => import("../views/productBanner/small-banner.vue"),
        },
      ],
    },
  ],
});

export default router;
