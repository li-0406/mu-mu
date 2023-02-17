<script setup>
import { useHomePage } from "../stores/homepage.js";
import { storeToRefs } from "pinia";
const { bottomLine, check } = useHomePage();
const { openNav } = storeToRefs(useHomePage());
</script>
<template>
  <div class="position-absolute navigation" :class="openNav">
    <ul class="list-unstyled">
      <li>
        <router-link to="/" :class="bottomLine(1)" @click="check(1)"
          >首頁</router-link
        >
      </li>
      <li>
        <router-link to="/product" :class="bottomLine(2)" @click="check(2)"
          >產品系列</router-link
        >
      </li>
      <li>
        <router-link to="/inspiration" :class="bottomLine(3)" @click="check(3)"
          >靈感</router-link
        >
      </li>
      <li>
        <router-link to="/brandConcept" :class="bottomLine(4)" @click="check(4)"
          >品牌理念</router-link
        >
      </li>
      <li>
        <router-link to="/maintainance" :class="bottomLine(5)" @click="check(5)"
          >保養方式</router-link
        >
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
.navigation {
  top: 84px;
  width: 20%;
  right: 0;
  z-index: 3;
  background-color: #fcfaf2;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 12px 0 0 12px;
  display: flex;
  transform: translateX(120%);
  transition: 0.8s;
  @include sm {
    width: 35%;
  }

  ul {
    margin: 0 auto;
    li {
      margin: 30px;
      a {
        text-decoration: none;
        color: #352b25;
        position: relative;
      }
      .click {
        &::after {
          content: " ";
          position: absolute;
          bottom: -5px;
          border-bottom: 2px solid #865031;
          left: 0;
          width: 100%;
        }
      }
    }
  }
}
.openNav {
  transform: translateX(0);
}
.closeNav {
  transform: translateX(120%);
}
</style>
