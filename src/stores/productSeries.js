import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";
import axios from "axios";
import router from "@/router";
import { useHomePage } from "./homepage.js";
import { getCurrentInstance } from "vue";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
export const useProductsSeries = defineStore("productsSeries", () => {
  const { getCart } = useHomePage();
  const { cartData } = storeToRefs(useHomePage());
  const product = ref([]);
  const index = ref(1);
  const searchText = ref("");
  const productPage = ref();
  const alosLike = ref([]);
  const arr = ref([]);
  const mainPic = ref();
  const productQuantity = ref(1);
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
  const search = () => {
    if (searchText.value == "") {
      return;
    } else {
      axios.get(`${url}/api/${path}/products/all`).then((res) => {
        console.log(res.data.products);
        product.value = res.data.products.filter((item) => {
          if (item.title.match(searchText.value) != null) {
            return item.title.match(searchText.value);
          } else {
            return;
          }
        });
      });
    }
  };

  const details = (item) => {
    axios.get(`${url}/api/${path}/product/${item}`).then((res) => {
      productPage.value = res.data.product;
      mainPic.value = productPage.value.imagesUrl[0];
      like(productPage.value.category);
    });
  };
  const like = (item) => {
    productQuantity.value = 1;
    arr.value = [];
    axios.get(`${url}/api/${path}/products?category=${item}`).then((res) => {
      for (var i = 0; i < res.data.products.length; i++) {
        arr.value.push(i);
      }
      arr.value.sort(() => Math.random() - 0.5);
      arr.value.length = 4;
      alosLike.value = [];
      for (let i = 0; i <= 3; i++) {
        alosLike.value.push(res.data.products[arr.value[i]]);
      }
    });

    // sessionStorage.setItem("alosLike", JSON.stringify(alosLike.value));
  };
  const addCart = (item, qty = 1) => {
    const data = {
      product_id: item.id,
      qty,
    };
    axios.post(`${url}/api/${path}/cart`, { data }).then((res) => {
      getCart();
    });
    const mytoast = new bootstrap.Toast(document.getElementById("toast"));
    mytoast.show();
  };
  const buy = (item, qty) => {
    const data = {
      product_id: item.id,
      qty,
    };
    axios.post(`${url}/api/${path}/cart`, { data }).then((res) => {
      getCart();
    });
    router.push("/checkout");
  };

  return {
    changeProducts,
    product,
    borderLine,
    searchText,
    search,
    details,
    productPage,
    alosLike,
    addCart,
    cartData,
    productQuantity,
    buy,
    mainPic,
    index,
  };
});
