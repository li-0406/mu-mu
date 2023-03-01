import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";
import axios from "axios";
import router from "@/router";
import { useHomePage } from "./homepage.js";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";
export const useProductsSeries = defineStore("productsSeries", () => {
  const product = ref([]);
  const index = ref(1);
  const searchText = ref("");
  const productPage = ref({});
  const alosLike = ref([]);
  const arr = ref([]);
  const mainPic = ref("");
  const productQuantity = ref(1);
  const cartData = ref({});
  const totlaPrice = ref(0);
  const loading = ref(false);
  const loadingCart = ref(false);
  const changeProducts = (item) => {
    switch (item) {
      case 1:
        index.value = item;
        axios
          .get(`${url}/api/${path}/products?category=桌子/茶几`)
          .then((res) => {
            product.value = res.data.products;
            product.value.forEach((item) => {
              item.price = toThousands(item.price);
            });
          });
        break;
      case 2:
        index.value = item;
        axios.get(`${url}/api/${path}/products?category=沙發`).then((res) => {
          product.value = res.data.products;
          product.value.forEach((item) => {
            item.price = toThousands(item.price);
          });
        });
        break;
      case 3:
        index.value = item;
        axios
          .get(`${url}/api/${path}/products?category=客/餐廳櫃類`)
          .then((res) => {
            product.value = res.data.products;

            product.value.forEach((item) => {
              item.price = toThousands(item.price);
            });
          });
        break;
      case 4:
        index.value = item;
        axios
          .get(`${url}/api/${path}/products?category=臥房櫃類`)
          .then((res) => {
            product.value = res.data.products;

            product.value.forEach((item) => {
              item.price = toThousands(item.price);
            });
          });
        break;
      case 5:
        index.value = item;
        axios
          .get(`${url}/api/${path}/products?category=椅/凳子`)
          .then((res) => {
            product.value = res.data.products;

            product.value.forEach((item) => {
              item.price = toThousands(item.price);
            });
          });
        break;
      case 6:
        index.value = item;
        axios
          .get(`${url}/api/${path}/products?category=木製小物`)
          .then((res) => {
            product.value = res.data.products;

            product.value.forEach((item) => {
              item.price = toThousands(item.price);
            });
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
    loading.value = true;
    axios.get(`${url}/api/${path}/product/${item}`).then((res) => {
      productPage.value = res.data.product;

      if (productPage.value.imagesUrl) {
        mainPic.value = productPage.value.imagesUrl[0];
      } else {
        mainPic.value = productPage.value.imageUrl;
      }
      like(productPage.value.category, productPage.value.title);
      productPage.value.price = toThousands(productPage.value.price);
      loading.value = false;
    });
  };
  const like = (item, title) => {
    productQuantity.value = 1;
    arr.value = [];
    axios.get(`${url}/api/${path}/products?category=${item}`).then((res) => {
      for (var i = 0; i < res.data.products.length; i++) {
        if (res.data.products[i].title == title) {
          continue;
        }
        arr.value.push(i);
      }
      arr.value.sort(() => Math.random() - 0.5);
      arr.value.length = 4;
      alosLike.value = [];
      for (let i = 0; i <= 3; i++) {
        alosLike.value.push(res.data.products[arr.value[i]]);
        alosLike.value[i].price = toThousands(alosLike.value[i].price);
      }
    });
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
  const getCart = () => {
    loadingCart.value = true;
    axios.get(`${url}/api/${path}/cart`).then((res) => {
      cartData.value = res.data.data.carts;
      totlaPrice.value = toThousands(res.data.data.total);
      loadingCart.value = false;
      cartData.value.forEach((item) => {
        item.product.price = toThousands(item.product.price);
        item.total = toThousands(item.total);
        loadingCart.value = false;
      });
    });
  };
  const buy = (item, qty) => {
    const data = {
      product_id: item.id,
      qty,
    };
    axios.post(`${url}/api/${path}/cart`, { data }).then((res) => {
      console.log(cartData.value[0].product.title);
      getCart();
    });
    router.push("/checkout");
  };
  const toThousands = (num) => {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
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
    totlaPrice,
    productQuantity,
    buy,
    mainPic,
    index,
    getCart,
    toThousands,
    loading,
    loadingCart,
  };
});
