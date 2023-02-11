import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useHomePage } from "./homepage.js";
import { storeToRefs } from "pinia";
const url = "https://vue3-course-api.hexschool.io/v2";
const path = "woodbox";

export const usecheckOut = defineStore("checkout", () => {
  const { getCart } = useHomePage();
  const { cartData, totlaPrice } = storeToRefs(useHomePage());
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
      sessionStorage.setItem("cartList", JSON.stringify(cartData.value));
      sessionStorage.setItem("totlaPrice", JSON.stringify(totlaPrice.value));
    });
  };

  const delCart = (item) => {
    axios.delete(`${url}/api/${path}/cart/${item.id}`).then((res) => {
      getCart();
    });
  };

  return { plus, cartData, totlaPrice, delCart, userData, orderNum };
});
