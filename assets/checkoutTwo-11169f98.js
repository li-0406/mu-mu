import{b as v,v as b}from"./runtime-dom.esm-bundler-3914bdce.js";import{_ as h,o as x,c as y,a as e,b as d,w as V,u as a,i as k,n as c,a5 as u,p as S,h as w}from"./_plugin-vue_export-helper-52f6f559.js";import{u as p}from"./checkOut-2fd35663.js";import{s as _,a as E,r as I}from"./homepage-0233f99a.js";import{F as T,a as m,E as r}from"./vee-validate.esm-0e7173d4.js";import"./vue-router-edadaece.js";const t=i=>(S("data-v-809dbf9e"),i=i(),w(),i),N={class:"container"},U={class:"row"},M=k('<div class="col-12 py-5 d-flex justify-content-center" data-v-809dbf9e><div class="text-center" data-v-809dbf9e><div class="step line act" data-v-809dbf9e><span class="schedule act" data-v-809dbf9e><span class="text" data-v-809dbf9e>1</span></span><span class="d-block" data-v-809dbf9e>購物車</span></div><div class="step line" data-v-809dbf9e><span class="schedule act" data-v-809dbf9e><span class="text" data-v-809dbf9e>2</span></span><span class="d-block" data-v-809dbf9e>填寫資料</span></div><div class="step" data-v-809dbf9e><span class="schedule" data-v-809dbf9e><span class="text" data-v-809dbf9e>3</span></span><span class="d-block" data-v-809dbf9e>訂單確認</span></div></div></div>',1),g={class:"mb-3 box mx-auto"},q=t(()=>e("label",{for:"name",class:"form-label"},"姓名",-1)),D={class:"mb-3 box mx-auto"},P=t(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),B={class:"mb-3 box mx-auto"},C=t(()=>e("label",{for:"tel",class:"form-label"},"手機",-1)),F={class:"mb-3 box mx-auto"},j=t(()=>e("label",{for:"address",class:"form-label"},"地址",-1)),A={class:"mb-3 box mx-auto"},L=t(()=>e("label",{for:"email",class:"form-label"},"付款方式",-1)),O={class:"dropdown"},z=t(()=>e("option",{selected:""},"信用卡",-1)),J=t(()=>e("option",{value:"ATM付款/銀行轉帳"},"ATM付款/銀行轉帳",-1)),R=t(()=>e("option",{value:"LINE Pay"},"LINE Pay",-1)),G=t(()=>e("option",{value:"貨到付款"},"貨到付款",-1)),H=t(()=>e("option",{value:"店面取貨"},"店面取貨",-1)),K=[z,J,R,G,H],Q={class:"mb-3 box mx-auto"},W=t(()=>e("label",{for:"email",class:"form-label"},"備註",-1)),X=t(()=>e("div",{class:"pay d-flex justify-content-center"},[e("button",null,"送出訂單")],-1)),Y={__name:"checkoutTwo",setup(i){p();const{userData:s}=_(p());_(E());const f=()=>{sessionStorage.setItem("userData",JSON.stringify(s.value)),I.push("/checkout/orderCheck")};return(Z,l)=>(x(),y("div",N,[e("div",U,[M,d(a(T),{class:"col-12",onSubmit:f},{default:V(({errors:n})=>[e("div",g,[q,d(a(m),{name:"姓名",type:"text",class:c(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=o=>a(s).name=o)},null,8,["class","modelValue"]),d(a(r),{name:"姓名",class:"invalid-feedback"})]),e("div",D,[P,d(a(m),{id:"email",name:"email",type:"email",placeholder:"請輸入Email",class:c(["form-control",{"is-invalid":n.email}]),rules:"required|email",modelValue:a(s).email,"onUpdate:modelValue":l[1]||(l[1]=o=>a(s).email=o)},null,8,["class","modelValue"]),d(a(r),{name:"email",class:"invalid-feedback"})]),e("div",B,[C,d(a(m),{id:"tel",name:"手機",type:"tel",class:c(["form-control",{"is-invalid":n.手機}]),placeholder:"請輸入手機",rules:"required|min: 10",modelValue:a(s).tel,"onUpdate:modelValue":l[2]||(l[2]=o=>a(s).tel=o)},null,8,["class","modelValue"]),d(a(r),{name:"手機",class:"invalid-feedback"})]),e("div",F,[j,d(a(m),{id:"address",name:"地址",type:"text",class:c(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a(s).address,"onUpdate:modelValue":l[3]||(l[3]=o=>a(s).address=o)},null,8,["class","modelValue"]),d(a(r),{name:"地址",class:"invalid-feedback"})]),e("div",A,[L,e("div",O,[u(e("select",{class:"form-select Payment","aria-label":"Default select example","onUpdate:modelValue":l[4]||(l[4]=o=>a(s).pay=o)},K,512),[[v,a(s).pay]])])]),e("div",Q,[W,u(e("textarea",{id:"email",name:"email",type:"text",class:"form-control","onUpdate:modelValue":l[5]||(l[5]=o=>a(s).text=o)},null,512),[[b,a(s).text]])]),X]),_:1})])]))}},oe=h(Y,[["__scopeId","data-v-809dbf9e"]]);export{oe as default};
