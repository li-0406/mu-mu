import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";

export const useHomePage = defineStore("homepage", () => {
  const spaceImg = ref("");
  const spaceImgs = ref([]);
  const line = ref(1);
  const cartData = ref();
  const totlaPrice = ref();
  const on = ref(true);
  const changeSpace = (item) => {
    switch (item) {
      case 1:
        axios
          .get(`${url}/api/${path}/products?category=客廳空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
      case 2:
        axios
          .get(`${url}/api/${path}/products?category=臥室空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
      case 3:
        axios
          .get(`${url}/api/${path}/products?category=廚房空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
      case 4:
        axios
          .get(`${url}/api/${path}/products?category=餐廳空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
      case 5:
        axios
          .get(`${url}/api/${path}/products?category=浴室空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
      case 6:
        axios
          .get(`${url}/api/${path}/products?category=商業空間`)
          .then((res) => {
            spaceImg.value = res.data.products[0].imageUrl;
            spaceImgs.value = res.data.products[0].imagesUrl;
          });
        line.value = item;
        break;
    }
  };
  const checkSpace = (item) => {
    const click = "click";
    const normal = "";
    if (item == line.value) {
      return click;
    }
    return normal;
  };

  const getCart = () => {
    axios.get(`${url}/api/${path}/cart`).then((res) => {
      cartData.value = res.data.data.carts;
      totlaPrice.value = res.data.data.total;
      console.log(cartData.value);
    });
  };
  const delCart = (item) => {
    axios.delete(`${url}/api/${path}/cart/${item.id}`).then((res) => {
      getCart();
    });
    const mytoast = new bootstrap.Toast(document.getElementById("delmsg"));
    mytoast.show();
  };
  const checkout = () => {
    router.push("/checkout");
    on.value = false;
  };
  return {
    spaceImg,
    spaceImgs,
    changeSpace,
    checkSpace,
    getCart,
    cartData,
    totlaPrice,
    delCart,
    checkout,
    on,
  };
});
