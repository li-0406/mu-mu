import{u as n}from"./checkOut-2fd35663.js";import{s as i,u as d}from"./homepage-0233f99a.js";import{_ as u,e as l,o as p,c as h,a as s,t as f,u as t,p as m,h as v}from"./_plugin-vue_export-helper-52f6f559.js";import"./vue-router-edadaece.js";const _=e=>(m("data-v-7143498e"),e=e(),v(),e),k={class:"container"},x={class:"row"},y={class:"col-12 d-flex justify-content-center pt-5"},g=_(()=>s("div",{class:"p-3"},[s("i",{class:"fa-regular fa-circle-check fa-3x"})],-1)),S=_(()=>s("h3",{class:"mb-3 fs-5"},"謝謝您！您的訂單已經成立！",-1)),I={class:"fs-5"},b={class:"col-12 d-flex justify-content-center"},N={__name:"checkoutFinish",setup(e){const{orderNum:o,userData:B}=i(n()),{backHome:c}=n();return i(d()),l(()=>{o.value=JSON.parse(sessionStorage.getItem("orderNum"))}),(F,a)=>(p(),h("div",k,[s("div",x,[s("div",y,[g,s("div",null,[S,s("h3",I,"訂單號碼 "+f(t(o)),1)])]),s("div",b,[s("button",{type:"buttoon",class:"my-5",onClick:a[0]||(a[0]=(...r)=>t(c)&&t(c)(...r))},"回首頁")])])]))}},O=u(N,[["__scopeId","data-v-7143498e"]]);export{O as default};