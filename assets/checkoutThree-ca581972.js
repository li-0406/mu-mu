import{_ as f,a7 as x,o as l,c as n,a as s,F as i,g as p,a6 as u,t,u as a,p as v,h as b,e as $,b as w,i as k}from"./_plugin-vue_export-helper-52f6f559.js";import{u as m}from"./checkOut-2fd35663.js";import{s as g,a as N,r as S}from"./homepage-0233f99a.js";import"./vue-router-edadaece.js";const _=o=>(v("data-v-1d44749a"),o=o(),b(),o),I={class:"col-12 pt-2 d-none d-md-block"},T={class:"table table align-middle",style:{"border-spacing":"10px"}},L=_(()=>s("thead",null,[s("tr",null,[s("th",{scope:"col"},"商品資料"),s("th",{scope:"col"},"價格"),s("th",{scope:"col",class:"text-center"},"數量"),s("th",{scope:"col",class:"text-center"},"小計")])],-1)),j={scope:"row"},D={class:"d-flex"},B={class:"fs-6 my-auto ms-3"},P={class:"text-center"},O={class:"text-center"},V=_(()=>s("td",{scope:"row",class:"fs-5"},"合計：",-1)),q={class:"text-end fs-5 fw-bold",colspan:"3"},F={class:"col-12 border-top d-block d-md-none"},J={class:"d-flex justify-content-between align-items-center"},M={class:"fs-6 my-auto ms-3"},U={class:"d-flex justify-content-between mt-2 border-bottom"},z={class:"fs-6"},C={class:"fs-6"},E={class:"d-flex justify-content-between mt-3"},R=_(()=>s("h5",null,"合計：",-1)),A={class:"fw-bold"},G={__name:"cartListLast",setup(o){m();const{cartData:d,totlaPrice:c}=g(N());return x(()=>{}),(h,y)=>(l(),n(i,null,[s("div",I,[s("table",T,[L,s("tbody",null,[(l(!0),n(i,null,p(a(d),e=>(l(),n("tr",{key:e.id},[s("td",j,[s("div",D,[s("div",{class:"productPic",style:u({backgroundImage:"url("+e.product.imageUrl+")"})},null,4),s("h4",B,t(e.product.title),1)])]),s("td",null,"NT$"+t(e.product.price),1),s("td",P,t(e.qty),1),s("td",O,"NT$"+t(e.total),1)]))),128)),s("tr",null,[V,s("td",q,"NT$"+t(a(c)),1)])])])]),s("div",F,[(l(!0),n(i,null,p(a(d),e=>(l(),n("div",{key:e.id,class:"pt-2"},[s("div",J,[s("div",{class:"productPic",style:u({backgroundImage:"url("+e.product.imageUrl+")"})},null,4),s("h4",M,t(e.product.title),1)]),s("div",U,[s("h5",z,"數量："+t(e.qty),1),s("h5",C,"NT$"+t(e.product.price),1)])]))),128)),s("div",E,[R,s("h5",A,"NT$"+t(a(c)),1)])])],64))}},H=f(G,[["__scopeId","data-v-1d44749a"]]);const r=o=>(v("data-v-4f8ac5b7"),o=o(),b(),o),K={class:"container"},Q={class:"row"},W=k('<div class="col-12 py-5 d-flex justify-content-center" data-v-4f8ac5b7><div class="text-center" data-v-4f8ac5b7><div class="step line" data-v-4f8ac5b7><span class="schedule" data-v-4f8ac5b7><span class="text" data-v-4f8ac5b7>1</span></span><span class="d-block" data-v-4f8ac5b7>購物車</span></div><div class="step line" data-v-4f8ac5b7><span class="schedule" data-v-4f8ac5b7><span class="text" data-v-4f8ac5b7>2</span></span><span class="d-block" data-v-4f8ac5b7>填寫資料</span></div><div class="step" data-v-4f8ac5b7><span class="schedule" data-v-4f8ac5b7><span class="text" data-v-4f8ac5b7>3</span></span><span class="d-block" data-v-4f8ac5b7>訂單確認</span></div></div></div>',1),X={class:"col-12 pt-5"},Y=r(()=>s("h3",{class:"information fs-4"}," 訂單資訊",-1)),Z={class:"mb-4 fw-light fs-5"},ss=r(()=>s("h4",{class:"mb-4 fw-light fs-5"}," 訂單狀態：未付款",-1)),ts={class:"fw-light fs-5"},es={class:"col-12 pt-5"},as=r(()=>s("h3",{class:"information fs-4"}," 收件人資料",-1)),cs={class:"mb-4 fw-light fs-5"},os={class:"mb-4 fw-light fs-5"},ds={class:"mb-4 fw-light fs-5"},ls={class:"mb-4 fw-light fs-5"},ns={class:"fw-light fs-5"},is={__name:"checkoutThree",setup(o){const{orderNum:d,userData:c}=g(m());$(()=>{c.value=JSON.parse(sessionStorage.getItem("userData")),d.value=new Date().getTime()});const h=()=>{sessionStorage.setItem("orderNum",JSON.stringify(d.value)),S.push("/checkout/finish")};return(y,e)=>(l(),n("div",K,[s("div",Q,[W,w(H),s("div",X,[Y,s("h4",Z," 訂單號碼："+t(a(d)),1),ss,s("h4",ts," 付款方式："+t(a(c).pay),1)]),s("div",es,[as,s("h4",cs," 收件人："+t(a(c).name),1),s("h4",os," email："+t(a(c).email),1),s("h4",ds," 手機號碼："+t(a(c).tel),1),s("h4",ls,"  收件地址："+t(a(c).address),1),s("h4",ns," 備註："+t(a(c).text),1)]),s("div",{class:"col-12 py-5"},[s("div",{class:"pay d-flex justify-content-center"},[s("button",{type:"button",onClick:h},"確認付款")])])])]))}},us=f(is,[["__scopeId","data-v-4f8ac5b7"]]);export{us as default};
