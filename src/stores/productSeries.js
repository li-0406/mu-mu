import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";

export const useProductsSeries = defineStore("productsSeries", () => {
  const product = ref([]);
  const index = ref(1);
  const changeProducts = (item) => {
    switch (item) {
      case 1:
        axios
          .get(`${url}/api/${path}/products?category=桌子/茶几`)
          .then((res) => {
            product.value = res.data.products;
            index.value = item;
          });
        break;
      case 2:
        axios.get(`${url}/api/${path}/products?category=沙發`).then((res) => {
          product.value = res.data.products;
          index.value = item;
        });
        break;
      case 3:
        axios
          .get(`${url}/api/${path}/products?category=客/餐廳櫃類`)
          .then((res) => {
            product.value = res.data.products;
            index.value = item;
          });
        break;
      case 4:
        axios
          .get(`${url}/api/${path}/products?category=臥房櫃類`)
          .then((res) => {
            product.value = res.data.products;
            index.value = item;
          });
        break;
      case 5:
        axios
          .get(`${url}/api/${path}/products?category=椅/凳子`)
          .then((res) => {
            product.value = res.data.products;
            index.value = item;
          });
        break;
      case 6:
        axios
          .get(`${url}/api/${path}/products?category=木製小物`)
          .then((res) => {
            product.value = res.data.products;
            index.value = item;
          });
        break;
    }
  };
  const borderLine = (item) => {
    const click = "click";
    const normal = "";
    if (index.value == item) {
      return click;
    }
    return normal;
  };
  return { changeProducts, product, borderLine };
});
