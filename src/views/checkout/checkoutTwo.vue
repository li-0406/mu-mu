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
      <div class="col-12 py-5 d-flex justify-content-center">
        <div class="text-center">
          <div class="step line act">
            <span class="schedule act">
              <span class="text">1</span>
            </span>
            <span class="d-block">購物車</span>
          </div>
          <div class="step line">
            <span class="schedule act">
              <span class="text">2</span>
            </span>
            <span class="d-block">填寫資料</span>
          </div>
          <div class="step">
            <span class="schedule">
              <span class="text">3</span>
            </span>
            <span class="d-block">訂單確認</span>
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
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
.step {
  display: inline-block;
  width: 240px;
  max-width: 33%;
  position: relative;
  .text {
    z-index: 1;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
  }
  .schedule {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0;
    &::after {
      content: " ";
      border-radius: 15px;
      transform: translate(-50%, -50%);
      background-color: #cccccc;
      height: 30px;
      width: 30px;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: 0;
    }
  }
  .act::after {
    background-color: #865031;
  }
}
.line {
  display: inline-block;
  width: 240px;
  max-width: 33%;
  position: relative;
  &::before {
    content: " ";
    background-color: #cccccc;
    height: 2px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 35%;
    margin-top: -1px;
    z-index: 0;
  }
}
.act::before {
  background-color: #865031;
}
.box {
  width: 40%;
  @include sm {
    width: 80%;
  }
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
    width: 25%;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      -webkit-filter: brightness(1.2);
    }
  }
}
</style>
