(function(e){function o(o){for(var t,a,i=o[0],u=o[1],p=o[2],c=0,m=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&m.push(l[a][0]),l[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);h&&h(o);while(m.length)m.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],t=!0,a=1;a<n.length;a++){var i=n[a];0!==l[i]&&(t=!1)}t&&(r.splice(o--,1),e=u(u.s=n[0]))}return e}var t={},a={app:0},l={app:0},r=[];function i(e){return u.p+"js/"+({"about~home~homepage~login~notplayable":"about~home~homepage~login~notplayable",about:"about",homepage:"homepage","home~login~notplayable":"home~login~notplayable","home~login":"home~login",home:"home",login:"login",notplayable:"notplayable",player:"player"}[e]||e)+"."+{"about~home~homepage~login~notplayable":"9cedf5f0",about:"cd9236d6",homepage:"008a5551","home~login~notplayable":"f6974652","home~login":"430b9ec9",home:"e6c36ccb",login:"959ba07f",notplayable:"dc1fbd3a",player:"a0645e09"}[e]+".js"}function u(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var o=[],n={"about~home~homepage~login~notplayable":1,about:1,homepage:1,"home~login~notplayable":1,"home~login":1,home:1,login:1,notplayable:1,player:1};a[e]?o.push(a[e]):0!==a[e]&&n[e]&&o.push(a[e]=new Promise((function(o,n){for(var t="css/"+({"about~home~homepage~login~notplayable":"about~home~homepage~login~notplayable",about:"about",homepage:"homepage","home~login~notplayable":"home~login~notplayable","home~login":"home~login",home:"home",login:"login",notplayable:"notplayable",player:"player"}[e]||e)+"."+{"about~home~homepage~login~notplayable":"282898ee",about:"192efe69",homepage:"192efe69","home~login~notplayable":"a30912b8","home~login":"c56eeb41",home:"712ffcca",login:"aab53789",notplayable:"07a87f9f",player:"e6a87636"}[e]+".css",l=u.p+t,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var p=r[i],c=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===t||c===l))return o()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){p=m[i],c=p.getAttribute("data-href");if(c===t||c===l)return o()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=o,h.onerror=function(o){var t=o&&o.target&&o.target.src||l,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete a[e],h.parentNode.removeChild(h),n(r)},h.href=l;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){a[e]=0})));var t=l[e];if(0!==t)if(t)o.push(t[2]);else{var r=new Promise((function(o,n){t=l[e]=[o,n]}));o.push(t[2]=r);var p,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var m=new Error;p=function(o){c.onerror=c.onload=null,clearTimeout(h);var n=l[e];if(0!==n){if(n){var t=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",m.name="ChunkLoadError",m.type=t,m.request=a,n[1](m)}l[e]=void 0}};var h=setTimeout((function(){p({type:"timeout",target:c})}),12e4);c.onerror=c.onload=p,document.head.appendChild(c)}return Promise.all(o)},u.m=e,u.c=t,u.d=function(e,o,n){u.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,o){if(1&o&&(e=u(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)u.d(n,t,function(o){return e[o]}.bind(null,t));return n},u.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(o,"a",o),o},u.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},u.p="/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=o,p=p.slice();for(var m=0;m<p.length;m++)o(p[m]);var h=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),a=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("v-app",{attrs:{id:"app"}},[e.displayLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"teal"}}):e._e(),n("router-view")],1)},l=[],r={title:"IP TV For All",name:"App",components:{},data:function(){return{displayLoading:!1}},created:function(){var e=this;this.$eventBus.$on("displayLoading",(function(o){e.displayLoading=o}))},mounted:function(){var e=this;e.displayLoading=!0,this.$axios.get("../resources/ui-logon.png?timestamp=".concat((new Date).getTime())).then((function(e){var o=atob(e.data);localStorage.setItem("tokenJson",o)})).catch((function(e){})).then((function(){e.displayLoading=!1}))}},i=r,u=n("2877"),p=n("6544"),c=n.n(p),m=n("7496"),h=n("8e36"),g=Object(u["a"])(i,a,l,!1,null,null,null),s=g.exports;c()(g,{VApp:m["a"],VProgressLinear:h["a"]});n("d3b7");var b=n("8c4f");t["a"].use(b["a"]);var f=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("about~home~homepage~login~notplayable"),n.e("home~login~notplayable"),n.e("home~login"),n.e("home")]).then(n.bind(null,"bb51"))},redirect:{name:"Home.HomePage"},children:[{path:"/about",name:"Home.About",component:function(){return Promise.all([n.e("about~home~homepage~login~notplayable"),n.e("about")]).then(n.bind(null,"84ba"))}},{path:"home",name:"Home.HomePage",component:function(){return Promise.all([n.e("about~home~homepage~login~notplayable"),n.e("homepage")]).then(n.bind(null,"487a"))}},{path:"/player/:channelId",name:"Home.Player",component:function(){return n.e("player").then(n.bind(null,"cccf"))}},{path:"/unable-to-play",name:"Home.NotPlayable",component:function(){return Promise.all([n.e("about~home~homepage~login~notplayable"),n.e("home~login~notplayable"),n.e("notplayable")]).then(n.bind(null,"9f1a"))}}]},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("about~home~homepage~login~notplayable"),n.e("home~login~notplayable"),n.e("home~login"),n.e("login")]).then(n.bind(null,"a55b"))}}],d=new b["a"]({routes:f}),y=d;function v(e){var o=e.$options.title;if(o)return"function"===typeof o?o.call(e):o}var w={created:function(){var e=v(this);e&&(document.title=e)}},P=n("f309");t["a"].use(P["a"]);var L=new P["a"]({}),O=n("bc3a"),j=n.n(O);t["a"].config.productionTip=!1,t["a"].mixin(w);var _=new t["a"];t["a"].prototype.$axios=j.a,t["a"].prototype.$eventBus=_,new t["a"]({router:y,vuetify:L,render:function(e){return e(s)}}).$mount("#app")}});