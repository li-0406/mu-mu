import{J as dt,K as v,L as K,M as ut,N as Q,O as rt,P as wt,Q as Et,R as St,S as Pt,T as Ct,U as It,V as Lt,W as Rt,X as Ot,Y as Tt,_ as Y,r as X,o as U,c as F,a as e,b as R,w as q,d as S,p as Z,h as G,i as _t,n as j,u as g,e as pt,F as Vt}from"./_plugin-vue_export-helper-52f6f559.js";import{a as b,c as Dt,b as At}from"./vue-router-edadaece.js";var Nt=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let vt;const tt=t=>vt=t,ht=Symbol();function ot(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var J;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(J||(J={}));function ws(){const t=dt(!0),o=t.run(()=>v({}));let s=[],a=[];const n=K({install(l){tt(n),n._a=l,l.provide(ht,n),l.config.globalProperties.$pinia=n,a.forEach(r=>s.push(r)),a=[]},use(l){return!this._a&&!Nt?a.push(l):s.push(l),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return n}const ft=()=>{};function lt(t,o,s,a=ft){t.push(o);const n=()=>{const l=t.indexOf(o);l>-1&&(t.splice(l,1),a())};return!s&&It()&&Lt(n),n}function B(t,...o){t.slice().forEach(s=>{s(...o)})}function ct(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,a)=>t.set(a,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const a=o[s],n=t[s];ot(n)&&ot(a)&&t.hasOwnProperty(s)&&!Q(a)&&!rt(a)?t[s]=ct(n,a):t[s]=a}return t}const jt=Symbol();function Bt(t){return!ot(t)||!t.hasOwnProperty(jt)}const{assign:V}=Object;function Ut(t){return!!(Q(t)&&t.effect)}function Ft(t,o,s,a){const{state:n,actions:l,getters:r}=o,u=s.state.value[t];let y;function p(){u||(s.state.value[t]=n?n():{});const m=Ot(s.state.value[t]);return V(m,l,Object.keys(r||{}).reduce((h,w)=>(h[w]=K(Tt(()=>{tt(s);const O=s._s.get(t);return r[w].call(O,O)})),h),{}))}return y=mt(t,p,o,s,a,!0),y.$reset=function(){const h=n?n():{};this.$patch(w=>{V(w,h)})},y}function mt(t,o,s={},a,n,l){let r;const u=V({actions:{}},s),y={deep:!0};let p,m,h=K([]),w=K([]),O;const T=a.state.value[t];!l&&!T&&(a.state.value[t]={}),v({});let f;function $(c){let _;p=m=!1,typeof c=="function"?(c(a.state.value[t]),_={type:J.patchFunction,storeId:t,events:O}):(ct(a.state.value[t],c),_={type:J.patchObject,payload:c,storeId:t,events:O});const x=f=Symbol();Rt().then(()=>{f===x&&(p=!0)}),m=!0,B(h,_,a.state.value[t])}const N=ft;function H(){r.stop(),h=[],w=[],a._s.delete(t)}function at(c,_){return function(){tt(a);const x=Array.from(arguments),z=[],W=[];function kt(C){z.push(C)}function xt(C){W.push(C)}B(w,{args:x,name:c,store:i,after:kt,onError:xt});let M;try{M=_.apply(this&&this.$id===t?this:i,x)}catch(C){throw B(W,C),C}return M instanceof Promise?M.then(C=>(B(z,C),C)).catch(C=>(B(W,C),Promise.reject(C))):(B(z,M),M)}}const E={_p:a,$id:t,$onAction:lt.bind(null,w),$patch:$,$reset:N,$subscribe(c,_={}){const x=lt(h,c,_.detached,()=>z()),z=r.run(()=>Pt(()=>a.state.value[t],W=>{(_.flush==="sync"?m:p)&&c({storeId:t,type:J.direct,events:O},W)},V({},y,_)));return x},$dispose:H},i=Ct(E);a._s.set(t,i);const d=a._e.run(()=>(r=dt(),r.run(()=>o())));for(const c in d){const _=d[c];if(Q(_)&&!Ut(_)||rt(_))l||(T&&Bt(_)&&(Q(_)?_.value=T[c]:ct(_,T[c])),a.state.value[t][c]=_);else if(typeof _=="function"){const x=at(c,_);d[c]=x,u.actions[c]=_}}return V(i,d),V(ut(i),d),Object.defineProperty(i,"$state",{get:()=>a.state.value[t],set:c=>{$(_=>{V(_,c)})}}),a._p.forEach(c=>{V(i,r.run(()=>c({store:i,app:a._a,pinia:a,options:u})))}),T&&l&&s.hydrate&&s.hydrate(i.$state,T),p=!0,m=!0,i}function gt(t,o,s){let a,n;const l=typeof o=="function";typeof t=="string"?(a=t,n=l?s:o):(n=t,a=t.id);function r(u,y){const p=Et();return u=u||p&&St(ht,null),u&&tt(u),u=vt,u._s.has(a)||(l?mt(a,o,n,u):Ft(a,n,u)),u._s.get(a)}return r.$id=a,r}function Ht(t){{t=ut(t);const o={};for(const s in t){const a=t[s];(Q(a)||rt(a))&&(o[s]=wt(t,s))}return o}}const zt="modulepreload",Wt=function(t){return"/mu-mu/"+t},it={},k=function(o,s,a){if(!s||s.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Wt(l),l in it)return;it[l]=!0;const r=l.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!a)for(let m=n.length-1;m>=0;m--){const h=n[m];if(h.href===l&&(!r||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":zt,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((m,h)=>{p.addEventListener("load",m),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>o())},Mt="/mu-mu/assets/desktop_kv-eccc774f.png";const qt={},bt=t=>(Z("data-v-7f5d1537"),t=t(),G(),t),Jt={class:"position-relative banner"},Qt={"data-aos":"fade-zoom-in","data-aos-easing":"ease","data-aos-offset":"0","data-aos-duration":"3000","data-aos-once":"true"},Yt=bt(()=>e("img",{src:Mt,style:{width:"100%"}},null,-1)),Kt={class:"container position-absolute bannerText"},Xt={class:"row"},Zt={class:"col"},Gt={"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-offset":"0","data-aos-duration":"2000","data-aos-once":"true","data-aos-delay":"100"},te=bt(()=>e("h1",{class:"fs-2 mb-5 lh-base fw-light"},[S(" 將設計融於人性"),e("br"),S(" 將家居帶入悠閒自在的情境 ")],-1));function ee(t,o){const s=X("router-link");return U(),F("div",Jt,[e("div",Qt,[Yt,e("div",Kt,[e("div",Xt,[e("div",Zt,[e("div",Gt,[te,R(s,{to:"/product",class:"text-decoration-none px-5 py-2 fs-5 bannerBtn"},{default:q(()=>[S("挑選產品")]),_:1})])])])])])])}const se=Y(qt,[["render",ee],["__scopeId","data-v-7f5d1537"]]),ae="/mu-mu/assets/expert-87b286cc.png",oe="/mu-mu/assets/quality-a60efd57.png",ce="/mu-mu/assets/custom-7f83355f.png";const ne={},re={class:"advantage"},le=_t('<div class="container" data-v-6fc8c9d8><div class="row" data-v-6fc8c9d8><div class="col" data-v-6fc8c9d8><div class="bg-white text-dark advantageBox py-4 px-4" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true" data-v-6fc8c9d8><div class="pic mx-auto" data-v-6fc8c9d8><img src="'+ae+'" class="w-100" data-v-6fc8c9d8></div><h3 class="text-center mt-3 mb-2 fs-4" data-v-6fc8c9d8>職人精神</h3><p class="lh-lg mb-0 fs-6 fw-light" data-v-6fc8c9d8> 團隊裡每位師傅追求卓越的態度，對工作不斷精進，不只追求於表面的完成，而是追求更高水平的完美，追求品質的熱忱和追求成就的動力。 </p></div></div><div class="col d-flex" data-v-6fc8c9d8><div class="bg-white text-dark advantageBox py-4 px-4" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true" data-v-6fc8c9d8><div class="pic mx-auto" data-v-6fc8c9d8><img src="'+oe+'" class="w-100" data-v-6fc8c9d8></div><h3 class="text-center mt-3 mb-2 fs-4" data-v-6fc8c9d8>品質保證</h3><p class="lh-lg mb-0 fs-6 fw-light" data-v-6fc8c9d8> 為了家具實用與耐用的堅持，並同時兼顧環保與森林永續發展，我們嚴格的品質管理，可以提高品質、讓您更加安心使用。 </p></div></div><div class="col" data-v-6fc8c9d8><div class="bg-white text-dark advantageBox py-4 px-4" data-aos="flip-right" data-aos-duration="2000" data-aos-once="true" data-v-6fc8c9d8><div class="pic mx-auto" data-v-6fc8c9d8><img src="'+ce+'" class="w-100" data-v-6fc8c9d8></div><h3 class="text-center mt-3 mb-2 fs-4" data-v-6fc8c9d8>量身打造</h3><p class="lh-lg mb-0 fs-6 fw-light" data-v-6fc8c9d8> 基於顧客的獨特需求和要求，一切為您客製化訂做，提供度身定制的產品與服務，滿足獨特的需求和期望，提升產品的使用價值和滿意度。 </p></div></div></div></div>',1),ie=[le];function de(t,o){return U(),F("div",re,ie)}const ue=Y(ne,[["render",de],["__scopeId","data-v-6fc8c9d8"]]);const P=t=>(Z("data-v-f0b90c42"),t=t(),G(),t),_e={class:"container space"},pe={class:"row"},ve={class:"col-12 col-lg-2"},he={class:"spaceText"},fe=P(()=>e("div",{class:"title"},[e("h1",{class:"fs-1 mb-3"},"inspiration"),e("h2",{class:"fs-3"},"空間應用")],-1)),me={class:"list-unstyled mt-5 mb-0"},ge=P(()=>e("h3",null,"客廳空間",-1)),be=P(()=>e("p",null,"living room",-1)),$e=[ge,be],ye=P(()=>e("h3",null,"臥室空間",-1)),ke=P(()=>e("p",null,"bedroom",-1)),xe=[ye,ke],we=P(()=>e("h3",null,"廚房空間",-1)),Ee=P(()=>e("p",null,"kitchen",-1)),Se=[we,Ee],Pe=P(()=>e("h3",null,"餐廳空間",-1)),Ce=P(()=>e("p",null,"dining room",-1)),Ie=[Pe,Ce],Le=P(()=>e("h3",null,"浴室空間",-1)),Re=P(()=>e("p",null,"bathroom",-1)),Oe=[Le,Re],Te=P(()=>e("h3",null,"商業空間",-1)),Ve=P(()=>e("p",null,"commercial",-1)),De=[Te,Ve],Ae={class:"col-12 col-lg-10 d-flex align-items-end"},Ne={id:"carouselExampleControls",class:"carousel slide carousel-fade pic"},je={class:"carousel-inner"},Be={class:"carousel-item active"},Ue=["src"],Fe={class:"carousel-item"},He=["src"],ze={class:"carousel-item"},We=["src"],Me=_t('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" data-v-f0b90c42><span class="carousel-control-prev-icon" aria-hidden="true" data-v-f0b90c42></span><span class="visually-hidden" data-v-f0b90c42>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" data-v-f0b90c42><span class="carousel-control-next-icon" aria-hidden="true" data-v-f0b90c42></span><span class="visually-hidden" data-v-f0b90c42>Next</span></button>',2),qe={__name:"space",setup(t){const{changeSpace:o,checkSpace:s,check:a}=nt(),{spaceImgs:n}=Ht(nt());return(l,r)=>(U(),F("div",_e,[e("div",pe,[e("div",ve,[e("div",he,[fe,e("ul",me,[e("li",{class:j(["mb-4",g(s)(1)]),role:"button",onClick:r[0]||(r[0]=u=>g(o)(1))},$e,2),e("li",{class:j(["mb-4",g(s)(2)]),role:"button",onClick:r[1]||(r[1]=u=>g(o)(2))},xe,2),e("li",{class:j(["mb-4",g(s)(3)]),role:"button",onClick:r[2]||(r[2]=u=>g(o)(3))},Se,2),e("li",{class:j(["mb-4",g(s)(4)]),role:"button",onClick:r[3]||(r[3]=u=>g(o)(4))},Ie,2),e("li",{class:j(["mb-4",g(s)(5)]),role:"button",onClick:r[4]||(r[4]=u=>g(o)(5))},Oe,2),e("li",{role:"button",class:j(g(s)(6)),onClick:r[5]||(r[5]=u=>g(o)(6))},De,2)])])]),e("div",Ae,[e("div",Ne,[e("div",je,[e("div",Be,[e("img",{src:g(n)[0],class:"d-block w-100 h-100"},null,8,Ue)]),e("div",Fe,[e("img",{src:g(n)[1],class:"d-block w-100 h-100"},null,8,He)]),e("div",ze,[e("img",{src:g(n)[2],class:"d-block w-100 h-100"},null,8,We)])]),Me])])])]))}},Je=Y(qe,[["__scopeId","data-v-f0b90c42"]]),I="https://vue3-course-api.hexschool.io/v2",L="woodbox",$t=gt("productsSeries",()=>{const t=v([]),o=v(1),s=v(""),a=v({}),n=v([]),l=v([]),r=v(""),u=v(1),y=v({}),p=v(0),m=v(!1),h=v(!1),w=i=>{switch(i){case 1:o.value=i,b.get(`${I}/api/${L}/products?category=桌子/茶几`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break;case 2:o.value=i,b.get(`${I}/api/${L}/products?category=沙發`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break;case 3:o.value=i,b.get(`${I}/api/${L}/products?category=客/餐廳櫃類`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break;case 4:o.value=i,b.get(`${I}/api/${L}/products?category=臥房櫃類`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break;case 5:o.value=i,b.get(`${I}/api/${L}/products?category=椅/凳子`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break;case 6:o.value=i,b.get(`${I}/api/${L}/products?category=木製小物`).then(d=>{t.value=d.data.products,t.value.forEach(c=>{c.price=E(c.price)})});break}},O=i=>{const d="click",c="";return o.value==i?d:c},T=()=>{s.value!=""&&b.get(`${I}/api/${L}/products/all`).then(i=>{t.value=i.data.products.filter(d=>{if(d.title.match(s.value)!=null)return d.title.match(s.value)})})},f=i=>{m.value=!0,b.get(`${I}/api/${L}/product/${i}`).then(d=>{a.value=d.data.product,a.value.imagesUrl?r.value=a.value.imagesUrl[0]:r.value=a.value.imageUrl,$(a.value.category,a.value.title),a.value.price=E(a.value.price),m.value=!1})},$=(i,d)=>{u.value=1,l.value=[],b.get(`${I}/api/${L}/products?category=${i}`).then(c=>{for(var _=0;_<c.data.products.length;_++)c.data.products[_].title!=d&&l.value.push(_);l.value.sort(()=>Math.random()-.5),l.value.length=4,n.value=[];for(let x=0;x<=3;x++)n.value.push(c.data.products[l.value[x]]),n.value[x].price=E(n.value[x].price)})},N=(i,d=1)=>{const c={product_id:i.id,qty:d};b.post(`${I}/api/${L}/cart`,{data:c}).then(x=>{H()}),new bootstrap.Toast(document.getElementById("toast")).show()},H=()=>{h.value=!0,b.get(`${I}/api/${L}/cart`).then(i=>{y.value=i.data.data.carts,p.value=E(i.data.data.total),h.value=!1,y.value.forEach(d=>{d.product.price=E(d.product.price),d.total=E(d.total),h.value=!1})})},at=(i,d)=>{const c={product_id:i.id,qty:d};b.post(`${I}/api/${L}/cart`,{data:c}).then(_=>{yt.push("/checkout"),H()})},E=i=>(i||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,");return{changeProducts:w,product:t,borderLine:O,searchText:s,search:T,details:f,productPage:a,alosLike:n,addCart:N,cartData:y,totlaPrice:p,productQuantity:u,buy:at,mainPic:r,index:o,getCart:H,toThousands:E,loading:m,loadingCart:h}});const et=t=>(Z("data-v-72b39636"),t=t(),G(),t),Qe={class:"container classic"},Ye={class:"row overflow-hidden"},Ke=et(()=>e("div",{class:"col-12 pb-3"},[e("h1",{class:"fs-1 mb-2"},"classic"),e("h2",{class:"fs-3 mb-4"},"經典系列")],-1)),Xe={class:"col-12 d-sm-flex","data-aos":"fade-right","data-aos-offset":"0","data-aos-easing":"ease","data-aos-duration":"800","data-aos-once":"true"},Ze={class:"position-relative classicPic"},Ge=["src"],ts=et(()=>e("div",{class:"d-flex align-items-center flex-grow-1 title","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-duration":"800","data-aos-once":"true"},[e("div",{class:"classicText"},[e("h2",{class:"fw-light"},[S(" 茶几 "),e("span",{class:"float-end float-sm-none"},"TABLE")]),e("h4",null,"實木系列/空間必備")])],-1)),es={class:"col-12 d-sm-flex py-sm-5","data-aos":"fade-left","data-aos-offset":"0","data-aos-easing":"ease","data-aos-duration":"800","data-aos-once":"true"},ss={class:"position-relative classicPic order-2"},as=["src"],os=et(()=>e("div",{class:"d-flex align-items-center flex-grow-1 title","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-offset":"0","data-aos-duration":"800","data-aos-once":"true"},[e("div",{class:"classicText"},[e("h2",{class:"fw-light"},[S(" 沙發 "),e("span",{class:"float-end float-sm-none"},"SOFA")]),e("h4",null,"日式風高背系列")])],-1)),cs={class:"col-12 d-sm-flex","data-aos":"fade-right","data-aos-offset":"0","data-aos-easing":"ease","data-aos-duration":"800","data-aos-once":"true"},ns={class:"position-relative classicPic"},rs=["src"],ls=et(()=>e("div",{class:"d-flex align-items-center flex-grow-1 title","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-offset":"0","data-aos-duration":"800","data-aos-once":"true"},[e("div",{class:"classicText"},[e("h2",{class:"fw-light"},[S(" 生活小物 "),e("span",{class:"float-end float-sm-none"},"PHOTO FRAME")]),e("h4",null,"空間質感加分")])],-1)),is={__name:"classic",setup(t){const{changeProducts:o}=$t(),s="https://vue3-course-api.hexschool.io/v2",a="woodbox",n=v({}),l=v({}),r=v({}),u=()=>{b.get(`${s}/api/${a}/products/all`).then(y=>{n.value=y.data.products[8],l.value=y.data.products[11],r.value=y.data.products[32]})};return pt(()=>{u()}),(y,p)=>{const m=X("routerLink"),h=X("router-link");return U(),F("div",Qe,[e("div",Ye,[Ke,e("div",Xe,[e("div",Ze,[e("img",{src:g(n).imageUrl,class:"w-100"},null,8,Ge),R(m,{to:"/product",style:{"background-color":"rgba(0, 0, 0, 0.3)"},class:"text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask",onClick:p[0]||(p[0]=w=>g(o)(1))},{default:q(()=>[S(" 查看更多 ")]),_:1})]),ts]),e("div",es,[e("div",ss,[e("img",{src:g(l).imageUrl,class:"w-100"},null,8,as),R(h,{to:"/product/sofa",style:{"background-color":"rgba(0, 0, 0, 0.3)"},class:"text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask",onClick:p[1]||(p[1]=w=>g(o)(2))},{default:q(()=>[S(" 查看更多 ")]),_:1})]),os]),e("div",cs,[e("div",ns,[e("img",{src:g(r).imageUrl,class:"w-100"},null,8,rs),R(h,{to:"/product/small",style:{"background-color":"rgba(0, 0, 0, 0.3)"},class:"text-white fs-5 fw-light text-decoration-none w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center mask",onClick:p[2]||(p[2]=w=>g(o)(6))},{default:q(()=>[S(" 查看更多 ")]),_:1})]),ls])])])}}},ds=Y(is,[["__scopeId","data-v-72b39636"]]),us="/mu-mu/assets/desktop_brand_story-80c141a2.png";const _s={},st=t=>(Z("data-v-a51474d8"),t=t(),G(),t),ps={class:"position-relative brandStory"},vs=st(()=>e("img",{src:us,class:"w-100"},null,-1)),hs={class:"brandText position-absolute"},fs=st(()=>e("h2",{class:"fs-1 fw-normal"},"BRAND STORY",-1)),ms=st(()=>e("h3",{class:"fs-3 fw-light my-4"},"空間中，你是主角，目木是美麗的配角",-1)),gs=st(()=>e("h3",{class:"fs-5 mb-5 lh-base fw-light"},[S(" 為你而便利的存在"),e("br"),S(" 陪你在空間裡的自在"),e("br"),S(" 為質感而生的空間藝術家目木 ")],-1));function bs(t,o){const s=X("router-link");return U(),F("div",ps,[vs,e("div",hs,[fs,ms,gs,R(s,{to:"/brandConcept",class:"text-decoration-none fs-6"},{default:q(()=>[S("目木品牌理念")]),_:1})])])}const $s=Y(_s,[["render",bs],["__scopeId","data-v-a51474d8"]]),ys={__name:"HomePage",setup(t){const{changeSpace:o,check:s}=nt();return pt(()=>{o(1),s(1)}),(a,n)=>(U(),F(Vt,null,[R(se),R(ue),R(Je),R(ds),R($s)],64))}},yt=Dt({history:At("/mu-mu/"),routes:[{path:"/",name:"homepage",component:ys},{path:"/product",name:"product",component:()=>k(()=>import("./Products-0e503ce6.js"),["assets/Products-0e503ce6.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/Products-d7be33f5.css","assets/allProduct-10d611d0.css"]),children:[{path:"/product",component:()=>k(()=>import("./table-banner-e8e5ed76.js"),["assets/table-banner-e8e5ed76.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/table-banner-dc3cf347.css"])},{path:"sofa",component:()=>k(()=>import("./sofa-banner-ce9fcd75.js"),["assets/sofa-banner-ce9fcd75.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/sofa-banner-5b4b8364.css"])},{path:"liv",component:()=>k(()=>import("./liv-banner-91acfd5d.js"),["assets/liv-banner-91acfd5d.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/liv-banner-0d59e531.css"])},{path:"bed",component:()=>k(()=>import("./bed-banner-9269ff9a.js"),["assets/bed-banner-9269ff9a.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/bed-banner-743050d7.css"])},{path:"chair",component:()=>k(()=>import("./chair-banner-dca5efae.js"),["assets/chair-banner-dca5efae.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/chair-banner-786d6412.css"])},{path:"small",component:()=>k(()=>import("./small-banner-613373b2.js"),["assets/small-banner-613373b2.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/allProduct-419e3b96.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/allProduct-10d611d0.css","assets/vue-router-edadaece.js","assets/small-banner-ecfd47e8.css"])}]},{path:"/:id",name:"details",component:()=>k(()=>import("./productDetails-8d7472f7.js"),["assets/productDetails-8d7472f7.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/productDetails-67cd07d5.css"])},{path:"/checkout",name:"checkout",component:()=>k(()=>import("./checkout-37fe2c28.js"),["assets/checkout-37fe2c28.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/checkout-fb054d22.css"]),children:[{path:"/checkout",component:()=>k(()=>import("./checkoutOne-29b46992.js"),["assets/checkoutOne-29b46992.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/checkOut-2fd35663.js","assets/vue-router-edadaece.js","assets/checkoutOne-c173826a.css"])},{path:"write",component:()=>k(()=>import("./checkoutTwo-11169f98.js"),["assets/checkoutTwo-11169f98.js","assets/runtime-dom.esm-bundler-3914bdce.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/checkOut-2fd35663.js","assets/vue-router-edadaece.js","assets/vee-validate.esm-0e7173d4.js","assets/checkoutTwo-a0c1ae0d.css"])},{path:"orderCheck",component:()=>k(()=>import("./checkoutThree-ca581972.js"),["assets/checkoutThree-ca581972.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/checkOut-2fd35663.js","assets/vue-router-edadaece.js","assets/checkoutThree-adcdcbdf.css"])},{path:"finish",component:()=>k(()=>import("./checkoutFinish-ef8215ae.js"),["assets/checkoutFinish-ef8215ae.js","assets/checkOut-2fd35663.js","assets/vue-router-edadaece.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/checkoutFinish-151ea627.css"])}]},{path:"/inspiration",name:"inspiration",component:()=>k(()=>import("./inspiration-ddf799e9.js"),["assets/inspiration-ddf799e9.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/inspiration-ad5173d9.css"])},{path:"/inside/:id",name:"inside",component:()=>k(()=>import("./inspirationInside-96b7e1c7.js"),["assets/inspirationInside-96b7e1c7.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/inspirationInside-59765b63.css"])},{path:"/brandConcept",name:"brandConcept",component:()=>k(()=>import("./brandConcept-669b856a.js"),["assets/brandConcept-669b856a.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/brandConcept-40e78b66.css"])},{path:"/maintainance",name:"maintainance",component:()=>k(()=>import("./maintainance-e4796e35.js"),["assets/maintainance-e4796e35.js","assets/_plugin-vue_export-helper-52f6f559.js","assets/vue-router-edadaece.js","assets/maintainance-3f8da918.css"])}]}),D="https://vue3-course-api.hexschool.io/v2",A="woodbox",nt=gt("homepage",()=>{const{getCart:t}=$t(),o=v([]),s=v(1),a=v(1),n=v("colseCart"),l=v("colseNav"),r=v(!1),u=v(!1);return{spaceImgs:o,changeSpace:f=>{switch(f){case 1:b.get(`${D}/api/${A}/products?category=客廳空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break;case 2:b.get(`${D}/api/${A}/products?category=臥室空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break;case 3:b.get(`${D}/api/${A}/products?category=廚房空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break;case 4:b.get(`${D}/api/${A}/products?category=餐廳空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break;case 5:b.get(`${D}/api/${A}/products?category=浴室空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break;case 6:b.get(`${D}/api/${A}/products?category=商業空間`).then($=>{o.value=$.data.products[0].imagesUrl}),s.value=f;break}},checkSpace:f=>{const $="click",N="";return f==s.value?$:N},delCart:f=>{b.delete(`${D}/api/${A}/cart/${f.id}`).then(N=>{t()}),new bootstrap.Toast(document.getElementById("delmsg")).show()},checkout:()=>{yt.push("/checkout"),n.value="colseCart",r.value=!1},num:a,check:f=>{a.value=f},bottomLine:f=>a.value==f?"click":"",openCart:n,on:r,open:f=>{switch(f){case"cart":(l.value="openNav")&&(l.value="colseNav",u.value=!1),l.value="colseNav",r.value=!r.value,r.value?n.value="openCart":n.value="colseCart";break;case"nav":(n.value="openCart")&&(n.value="colseNav",r.value=!1),u.value=!u.value,u.value?l.value="openNav":l.value="colseNav";break}},openNav:l,onNav:u}});export{$t as a,ws as c,gt as d,yt as r,Ht as s,nt as u};