import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import { useProductsSeries } from "../stores/productSeries.js";
import { storeToRefs } from "pinia";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";

export const usecheckOut = defineStore("checkout", () => {
  const { getCart } = useProductsSeries();
  const { cartData, totlaPrice } = storeToRefs(useProductsSeries());
  const userData = ref({
    name: "",
    email: "",
    tel: "",
    address: "",
    pay: "信用卡",
    text: "",
  });
  const orderNum = ref();
  const plus = (item, text) => {
    switch (text) {
      case "plus":
        item.qty++;
        break;
      case "minus":
        item.qty == 1 ? item.qty == 1 : item.qty--;
        break;
    }
    const data = {
      product_id: item.id,
      qty: item.qty,
    };
    axios.put(`${url}/api/${path}/cart/${item.id}`, { data }).then((res) => {
      console.log(res);
      getCart();
      // sessionStorage.setItem("cartList", JSON.stringify(cartData.value));
      // sessionStorage.setItem("totlaPrice", JSON.stringify(totlaPrice.value));
    });
  };

  const delCart = (item) => {
    axios.delete(`${url}/api/${path}/cart/${item.id}`).then((res) => {
      getCart();
    });
  };
  const backHome = () => {
    router.push("/");
    axios.delete(`${url}/api/${path}/carts`).then((res) => {
      cartData.value = [];
      totlaPrice.value = {};
      userData.value = {
        pay: "信用卡",
      };
    });
  };

  return { plus, cartData, totlaPrice, delCart, userData, orderNum, backHome };
});
