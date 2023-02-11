<script setup>
import { ref } from "@vue/runtime-core";
import { usecheckOut } from "../../stores/checkOut.js";
import { storeToRefs } from "pinia";
import { Field, Form, ErrorMessage } from "vee-validate";
import router from "@/router";

const { plus, delCart } = usecheckOut();
const { cartData, totlaPrice, userData } = storeToRefs(usecheckOut());
const onSubmit = () => {
  sessionStorage.setItem("userData", JSON.stringify(userData.value));
  router.push("/checkout/orderCheck");
  console.log(userData.value);
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <div class="step d-flex position-relative">
          <div class="one position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >1</span
            >
          </div>
          <div class="out position-relative">
            <div
              class="line lineOne position-absolute top-50 start-50 translate-middle"
            ></div>
          </div>
          <div class="two position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >2</span
            >
          </div>
          <div class="out position-relative">
            <div
              class="line position-absolute top-50 start-50 translate-middle"
            ></div>
          </div>
          <div class="three position-relative">
            <span
              class="position-absolute top-50 start-50 translate-middle fs-5 fw-bolder"
              >3</span
            >
          </div>
        </div>
      </div>
      <Form class="col-12" @submit="onSubmit" v-slot="{ errors }">
        <div class="mb-3 box mx-auto">
          <label for="name" class="form-label">姓名</label>
          <Field
            name="姓名"
            type="text"
            class="form-control"
            placeholder="請輸入姓名"
            :class="{ 'is-invalid': errors['姓名'] }"
            rules="required"
            v-model="userData.name"
          />
          <ErrorMessage name="姓名" class="invalid-feedback" />
        </div>

        <div class="mb-3 box mx-auto">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="請輸入Email"
            class="form-control"
            rules="required|email"
            :class="{ 'is-invalid': errors['email'] }"
            v-model="userData.email"
          />
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
        <div class="mb-3 box mx-auto">
          <label for="tel" class="form-label">手機</label>
          <field
            id="tel"
            name="手機"
            type="tel"
            class="form-control"
            placeholder="請輸入手機"
            rules="required|min: 10"
            :class="{ 'is-invalid': errors['手機'] }"
            v-model="userData.tel"
          ></field>
          <error-message name="手機" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3 box mx-auto">
          <label for="address" class="form-label">地址</label>
          <field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            placeholder="請輸入地址"
            rules="required"
            :class="{ 'is-invalid': errors['地址'] }"
            v-model="userData.address"
          ></field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3 box mx-auto">
          <label for="email" class="form-label">付款方式</label>
          <div class="dropdown">
            <select
              class="form-select Payment"
              aria-label="Default select example"
              v-model="userData.pay"
            >
              <option selected>信用卡</option>
              <option value="ATM付款/銀行轉帳">ATM付款/銀行轉帳</option>
              <option value="LINE Pay">LINE Pay</option>
              <option value="貨到付款">貨到付款</option>
              <option value="店面取貨">店面取貨</option>
            </select>
          </div>
        </div>
        <div class="mb-3 box mx-auto">
          <label for="email" class="form-label">備註</label>
          <textarea
            id="email"
            name="email"
            type="text"
            class="enter"
            v-model="userData.text"
          ></textarea>
        </div>
        <div class="pay d-flex justify-content-center">
          <button>送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.step {
  left: 25%;
  .one,
  .two,
  .three {
    width: 0;
    height: 0;
    border: 2px solid #d3d3d3;
    background-color: transparent;
    padding: 0 3% 3% 0;
    border-radius: 20px;
    span {
      color: #d3d3d3;
    }
    &::after {
      content: "購物車";
      position: absolute;
      width: 60px;
      bottom: -25px;
      left: -3px;
    }
  }
  .two::after {
    content: "填寫資料";
    left: -10px;
  }
  .three::after {
    content: "訂單確認";
    left: -10px;
  }
  .one,
  .two {
    border: 2px solid #865031;
    span {
      color: #865031;
    }
  }
  .out {
    width: 0;
    height: 0;
    padding: 0 20% 3% 0;
    background-color: transparent;
    overflow: hidden;
    .line {
      width: 500px;
      height: 2px;
      background-color: #d3d3d3;
    }
    .lineOne {
      background-color: #865031;
    }
  }
}
.box {
  width: 40%;
  .enter {
    width: 100%;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1.5px solid #bbbbbb;
    &:focus {
      outline: 1.5px solid #865031;
    }
  }
}
.Payment {
  border: 1.5px solid #bbbbbb;
}

textarea {
  border: 1.5px solid #bbbbbb;
  outline: none;
}
.pay {
  button {
    border: none;
    background-color: #865031;
    color: #fff;
    padding: 8px;
    border-radius: 12px;
    width: 20%;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      -webkit-filter: brightness(1.2);
    }
  }
}
</style>
